$(function() {
	$('.span4').hover(function() {
		$(this).find('header').fadeOut('slow');
	}, function() {
		$(this).find('header').fadeIn('slow');
	});
});

var source = ace.edit("source");
source.getSession().setMode("ace/mode/clojure");

var parser = new L20nParser(L20nEventEmitter);
var compiler = new L20nCompiler(L20nEventEmitter, L20nParser);

parser.addEventListener('error', function(e) {
  $("#errors").append("<dt>Syntax error at position " + e.pos + "</dt><dd>" + e.message + "</dd>");
});
compiler.addEventListener('error', function(e) {
  $("#errors").append("<dt>" + e.name + " in entity <code>" + e.entry + "</code></dt><dd>" + e.message + "</dd>");
});

source.getSession().on('change', function(e) {
  $("#output").empty();
  $("#errors").empty();
  var code = source.getValue();
  var ast = parser.parse(code);
  var entries = compiler.compile(ast);
  for (var id in entries) {
    if (entries[id].expression) {
      $("#output").append("<div><dt><code>" + id + "()</code></dt><dd><em>macro</em></dd></div>");
      continue;
    }
    var val;
    try {
      val = entries[id].toString();
    } catch (e) {
      if (e instanceof compiler.ValueError) {
        val = e.source;
      } else {
        continue;
      }
    }
    $("#output").append("<div><dt><code>" + id + "</code></dt><dd>" + val + "</dd></div>");
  }
});

source.setValue(
  "<name \"L20n tinker\">\n" +
  "<welcome \"Welcome to {{ name }}\">\n"
);

