$(function() {

  /* L20n */

  var parser = new L20n.Parser(L20n.EventEmitter);
  var compiler = new L20n.Compiler(L20n.EventEmitter, L20n.Parser);

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
        $("#output").append("<div><dt><code>" + id + "()</code></dt><dd><em>macro</em></dd></div>");
        continue;
      }
      var val;
      try {
        val = entries[id].toString(data);
      } catch (e) {
        if (e instanceof compiler.ValueError) {
          val = e.source;
        } else {
          continue;
        }
      }
      $("#output").append("<div><dt><code>" + id + "</code></dt><dd>" + val + "</dd></div>");
    }
  }


  /* ACE */

  var source = ace.edit("source");
  source.getSession().setMode("ace/mode/clojure");
  source.getSession().on('change', update);

  var context = ace.edit("context");
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
    var code = source.getValue();
    return window.location.href.split("#")[0] + '#' + utf8_to_b64(code);
  }



  /* Main Code */

  var hash = window.location.hash.slice(1);
  var content = (
    "<name \"L20n tinker\">\n" +
    "<welcome \"Welcome to {{ name }}\">\n" +
    "\n" +
    "<plural($n) { $n == 1 ? \"one\" : \"many\" }>\n" +
    "<turnout[plural($people)] {\n" +
    "  one: \"There's one person in the room.\",\n" +
    "  many: \"There are {{ $people }} people in the room.\"\n" +
    "}>"
  );
  var ctxdata = (
    "{\n" +
    "  \"people\": 7\n" +
    "}"
  );

  if (hash) {
    content = b64_to_utf8(hash);
  }
  source.setValue(content);
  context.setValue(ctxdata);

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
