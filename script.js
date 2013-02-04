$(function() {

  /* L20n */

  var parser = new L20n.Parser(L20n.EventEmitter);
  var compiler = new L20n.Compiler(L20n.EventEmitter, L20n.Parser);

  compiler.setGlobals({
    get hour() {
      return new Date().getHours();
    },
    get os() {
      if (/^MacIntel/.test(navigator.platform)) {
        return 'mac';
      }
      if (/^Linux/.test(navigator.platform)) {
        return 'linux';
      }
      if (/^Win/.test(navigatgor.platform)) {
        return 'win';
      }
      return 'unknown';
    },
    screen: {
      get width() {
        return document.body.clientWidth;
      },
      get height() {
        return document.body.clientHeight;
      },
    }
  });

  parser.addEventListener('error', function(e) {
    $("#errors").append("<dt>Syntax error at position " + e.pos + "</dt><dd>" + e.message + "</dd>");
  });
  compiler.addEventListener('error', function(e) {
    $("#errors").append("<dt>" + e.name + " in entity <code>" + e.entry + "</code></dt><dd>" + e.message + "</dd>");
  });

  function update() {
    $("#output").empty();
    $("#errors").empty();
    var code = source.getValue();
    var ast = parser.parse(code);
    var data;
    try {
      var data = JSON.parse(context.getValue());
    } catch (e) {}
    var entries = compiler.compile(ast);
    for (var id in entries) {
      if (entries[id].expression) {
        continue;
        $("#output").append("<div><dt><code class=\"disabled\">" + id + "()</code></dt><dd></dd></div>");
      }
      var val;
      try {
        val = entries[id].toString(data);
      } catch (e) {
        if (e instanceof compiler.ValueError) {
          val = e.source;
        } else {
          $("#output").append("<div><dt><code class=\"disabled\">" + e.entry + "</code></dt><dd></dd></div>");
          continue;
        }
      }
      $("#output").append("<div><dt><code>" + id + "</code></dt><dd>" + val + "</dd></div>");
    }
  }


  /* ACE */

  var source = ace.edit("source");
  source.setShowPrintMargin(false);
  source.setDisplayIndentGuides(false);
  source.getSession().setUseWrapMode(true);
  source.setTheme("ace/theme/solarized_light");
  source.getSession().setMode("ace/mode/php");
  source.getSession().on('change', update);

  var context = ace.edit("context");
  context.setShowPrintMargin(false);
  context.setHighlightActiveLine(false);
  context.setHighlightGutterLine(false);
  context.setHighlightSelectedWord(false);
  context.getSession().setMode("ace/mode/json");
  context.getSession().on('change', update);


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
    }
    return window.location.href.split("#")[0] + '#' + utf8_to_b64(JSON.stringify(state));
  }



  /* Main Code */


  var hash = window.location.hash.slice(1) || defaultHash;
  var state = JSON.parse(b64_to_utf8(hash));
  source.setValue(state.source);
  context.setValue(state.context);
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
});
