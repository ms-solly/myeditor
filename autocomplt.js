
// autocorrect functionality not ready yet


var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
    mode: "text/html",
    theme: "darcula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-editor"), {
    mode: "text/css",
    theme: "darcula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true
});
var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-editor"), {
    mode: "text/javascript",
    theme: "darcula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true
});