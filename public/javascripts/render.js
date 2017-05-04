var p;
var button = document.getElementById("compile");
console.log(button);
button.addEventListener('click', function() {
    if (p && p.exit) {
        p.exit();
    }
    render();
}, false);

var prepareSource = function() {
    var js = editor.getValue();
    return js;
};

var render = function() {
    var source = prepareSource();
    function sketchProc(processing) {
        eval(source);
    }
    var canvas = document.getElementById("canvas1");
    p = new Processing(canvas, sketchProc);
};
