var js_editor = document.querySelector('#js textarea');
var p;

var button = document.getElementById("compile");
button.addEventListener('click', function() {
    if (p && p.exit) {
        p.exit();
    }
    render();
}, false);

var render = function() {
    function sketchProc(processing) {

        // BEGINNING OF PROCESSING SPECIFIC WRAPPER FUNCTIONS

        // ellipse = processing.ellipse;

        // END OF PROCESSING SPECIFIC WRAPPER FUNCTIONS
        debugger;

        eval(js_editor.value);
    }
    var canvas = document.getElementById("canvas1");
    p = new Processing(canvas, sketchProc);
};
