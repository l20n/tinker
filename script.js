$(function() {

  var config = {
    escapeHtml: true,
    lang: 'en-US',
    fixture: 'default',
  };

  const functions = {
    OS() {
      if (/^MacIntel/.test(navigator.platform)) return 'mac';
      if (/^Linux/.test(navigator.platform)) return 'lin';
      if (/^Win/.test(navigator.platform)) return 'win'
      return 'unknown';
    }
  };

  /* L20n */

  function update() {
    $("#errors").empty();
    $("#output").empty();

    var args;

    try {
      args = JSON.parse(context.getValue());
    } catch (e) {}

    var messages = source.getValue();

    try {
      var [resource, errors] = L20n.FTLASTParser.parseResource(messages);
    } catch(e) {
      logUnexpected(e);
    }

    const ctx = new Intl.MessageContext(config.lang, { functions });
    ctx.addMessages(messages);

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

    print(resource.body, ctx, args);
  }

  function print(body, ctx, args) {
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
        print(entry.body, ctx, args);
        continue;
      }

      if (entry.type === 'Entity') {
        const id = entry.id.name;

        try {
          const errors = [];
          const message = ctx.messages.get(id);
          const value = ctx.format(message, args, errors);
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

  /* L20n Demo for MozLondon */

  function getState() {
    return {
      demo: fixtures[config.fixture].demo,
      resId: fixtures[config.fixture].resId,
      lang: config.lang,
      messages: source.getValue(),
    }
  };

  L20nDemo.init(getState);


  /* ACE */

  var source = ace.edit("source");
  source.setBehavioursEnabled(false);
  source.setShowPrintMargin(false);
  source.setDisplayIndentGuides(false);
  source.getSession().setUseWrapMode(true);
  source.getSession().setOption("useWorker", false);
  source.setTheme("ace/theme/solarized_light");
  source.getSession().setMode("ace/mode/ft");
  source.getSession().on('change', debounce(update));

  var context = ace.edit("context");
  context.setShowPrintMargin(false);
  context.setHighlightActiveLine(false);
  context.setHighlightGutterLine(false);
  context.setHighlightSelectedWord(false);
  context.getSession().setMode("ace/mode/json");
  context.getSession().on('change', debounce(update));

  function debounce(fn) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), 250);
    };
  }


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


  /* Fixtures */

  const fixtures = {
    default: {
      ftl: 'fixtures/default.ftl',
      json: 'fixtures/default.json',
    },
    basic: {
      ftl: 'fixtures/basic.ftl',
      json: 'fixtures/basic.json',
    },
    aboutDialog: {
      resId: '/browser/aboutDialog.ftl',
      ftl: 'fixtures/aboutDialog.ftl',
      json: 'fixtures/aboutDialog.json',
      demo: true,
    },
    aboutRobots: {
      resId: '/browser/aboutRobots.ftl',
      ftl: 'fixtures/aboutRobots.ftl',
      json: 'fixtures/empty.json',
      demo: true,
    },
    aboutLocalization: {
      resId: '/global/aboutLocalization.ftl',
      ftl: 'fixtures/aboutLocalization.ftl',
      json: 'fixtures/empty.json',
      demo: true,
    },
    aboutSupport: {
      resId: '/global/aboutSupport.ftl',
      ftl: 'fixtures/aboutSupport.ftl',
      json: 'fixtures/aboutSupport.json',
      demo: true,
    },
    tabbrowser: {
      resId: '/browser/tabbrowser.ftl',
      ftl: 'fixtures/tabbrowser.ftl',
      json: 'fixtures/empty.json',
      demo: true,
    },
  };

  function loadFixture(name) {
    return Promise.all([
      fetch(fixtures[name].ftl).then(resp => resp.text()),
      fetch(fixtures[name].json).then(resp => resp.text()),
    ]).then(([ftl, args]) => {
      source.setValue(ftl);
      context.setValue(args);
      source.clearSelection();
      context.clearSelection();
      source.gotoLine(0);
    }).then(
      update
    );
  }

  /* Main Code */

  var hash = window.location.hash.slice(1);

  if (hash) {
    var state = JSON.parse(b64_to_utf8(hash));
    source.setValue(state.source);
    context.setValue(state.context);
    if (state.config) {
      config = state.config;
      document.querySelector('#lang').value = config.lang;
      document.querySelector('#fixture').value = config.fixture;
      document.querySelector('#escape-html').checkde = config.escapeHtml;
      L20nDemo.register();
    }
    source.clearSelection();
    source.gotoLine(0);
    context.clearSelection();
  } else {
    loadFixture('default').then(
      () => L20nDemo.register()
    );
  }

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
    L20nDemo.update();
  });

  $('#fixture').change(function(evt) {
    const fixture = evt.target.value;
    config.fixture = fixture;
    loadFixture(fixture).then(
      () => L20nDemo.update()
    );
  });

});
