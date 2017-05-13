var p;
var button = document.getElementById("compile");
console.log(button);
button.addEventListener('click', function() {
    if (p && p.exit) {
        p.exit();
    }
    render();
}, false);

var render = function() {
    function sketchProc(processing) {

        // BEGINNING OF PROCESSING SPECIFIC WRAPPER FUNCTIONS

        // NOTE: `ellipse = processing.ellipse` does not work to properly wrap
        // a processing function for some unknown reason
        ellipse = function(x, y, xr, yr) {
            processing.ellipse(x, y, xr, yr);
        };

        // END OF PROCESSING SPECIFIC WRAPPER FUNCTIONS

        eval(editor.getValue());
    }
    var canvas = document.getElementById("canvas1");
    p = new Processing(canvas, sketchProc);
};
