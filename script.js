$(function() {

  var config = {
    escapeHtml: true,
    lang: 'en-US',
  };

  /* L20n */

  function update() {
    $("#errors").empty();
    $("#output").empty();

    var args;

    try {
      args = JSON.parse(context.getValue());
    } catch (e) {}

    var code = source.getValue();
    try {
      var [resource, errors] = L20n.FTLASTParser.parseResource(code);
      var [entries] = L20n.createEntriesFromAST([resource, errors]);
    } catch(e) {
      logUnexpected(e);
    }

    errors.forEach(e => {
      $("#errors").append(
        "<dt>" + e.name + " in line " + e._pos.row + ", column " + e._pos.col +"</dt>" +
        "<dd>" + escapeHtml(e.description) + "</dd>" +
        "<dd><pre>" + prettyContext(e.context, e.offset) + "</pre></dd>"
      );
    });

    const anots = errors.map(e => ({
      type: 'error',
      text: e.message,
      row: e._pos.row - 1,
      column: e._pos.col,
    }));

    source.getSession().setAnnotations(anots);

    print(resource.body, new L20n.MockContext(entries), args, entries);
  }

  function print(body, ctx, args, entries) {
    for (let entry of body) {
      if (entry.type === 'Comment') {
        continue;
      }

      if (entry.type === 'JunkEntry') {
        $("#output").append(
          "<div><dt><code class='disabled'>JunkEntry</code></dt>" +
          "<dd><pre>" + escapeHtml(entry.content, true) + "</pre></dd></div>"
        );
        continue;
      }

      if (entry.type === 'Section') {
        print(entry.body, ctx, args, entries);
        continue;
      }

      if (entry.type === 'Entity') {
        const lang = { code: config.lang };
        const id = entry.id.name;

        try {
          const [value, errors] = L20n.format(ctx, lang, args, entries[id]);
          $("#output").append(
            "<div><dt><code>" + id + "</code></dt>" +
            "<dd>" + escapeHtml(value) + "</dd></div>"
          );
          errors.forEach(e => {
            $("#errors").append(
              "<dt>" + e.name + " in entity <code>" + id + "</code></dt>" +
              "<dd>" + escapeHtml(e.message) + "</dd>"
            );
          });
        } catch(e) {
          logUnexpected(e);
        }
      }
    }
  }

  /* ACE */

  var source = ace.edit("source");
  source.setBehavioursEnabled(false);
  source.setShowPrintMargin(false);
  source.setDisplayIndentGuides(false);
  source.getSession().setUseWrapMode(true);
  source.getSession().setOption("useWorker", false);
  source.setTheme("ace/theme/solarized_light");
  source.getSession().setMode("ace/mode/ft");
  source.getSession().on('change', update);

  var context = ace.edit("context");
  context.setShowPrintMargin(false);
  context.setHighlightActiveLine(false);
  context.setHighlightGutterLine(false);
  context.setHighlightSelectedWord(false);
  context.getSession().setMode("ace/mode/json");
  context.getSession().on('change', update);


  /* Errors */

  function logUnexpected(e) {
    $("#errors").append(
      "<dt>" + e.name + "</dt><dd>" + escapeHtml(e.message) + "</dd>"
    );
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function replaceHtml(char) {
    return entityMap[char];
  }

  function escapeHtml(str, force) {
    return str && (config.escapeHtml || force) ?
      str.replace(/[&<>"'\/]/g, replaceHtml) : str;
  }

  function prettyContext(content, offset) {
    const [ before, char, after ] = [
      content.substring(0, offset),
      content.substring(offset, offset + 1),
      content.substring(offset + 1)
    ].map(part => escapeHtml(part, true));

    const hilite = char === '\n' ?
      ' \n' : char;

    return `${before}<em>${hilite}</em>${after}`;
  }


  /* Linkify */

  function utf8_to_b64(str) {
      return window.btoa(unescape(encodeURIComponent(str)));
  }

  function b64_to_utf8(str) {
      return decodeURIComponent(escape(window.atob(str)));
  }

  function linkify() {
    var state = {
      source: source.getValue(),
      context: context.getValue(),
      config: config
    };
    return window.location.href.split("#")[0] + '#' +
      utf8_to_b64(JSON.stringify(state));
  }


  /* Main Code */

  var hash = window.location.hash.slice(1) || defaultHash;
  var state = JSON.parse(b64_to_utf8(hash));
  context.setValue(state.context);
  source.setValue(state.source);
  if (state.config) {
    config = state.config;
  }
  source.clearSelection();
  source.gotoLine(0);
  context.clearSelection();

  $('#share').popover({
    placement: 'bottom',
    html: true,
    title: 'Share URL',
    content: '<input id="share-url" type="text">',
  }).click(function() {
    $('#share-url').val(linkify()).focus().select();
    $(this).popover('toggle');
  });

  $('#escape-html').click(function() {
    config.escapeHtml = !config.escapeHtml;
    update();
  });

  $('#lang').change(function(evt) {
    config.lang = $(this).val();
    update();
  });
});
