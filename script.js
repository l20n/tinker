$(function() {

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

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
 
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

var hash = window.location.hash.slice(1);
var content = (
  "<name \"L20n tinker\">\n" +
  "<welcome \"Welcome to {{ name }}\">\n"
);

if (hash) {
  content = b64_to_utf8(hash);
}
source.setValue(content);

function linkify() {
  var code = source.getValue();
  console.log(utf8_to_b64(code));
}
