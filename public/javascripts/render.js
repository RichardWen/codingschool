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
        ellipse = function() {
            return processing.ellipse.apply(this, arguments);
        };
        point = function() {
            return processing.point.apply(this, arguments);
        };
        line = function() {
            return processing.line.apply(this, arguments);
        };
        rect = function() {
            return processing.rect.apply(this, arguments);
        };
        fill = function() {
            return processing.fill.apply(this, arguments);
        };
        stroke = function() {
            return processing.stroke.apply(this, arguments);
        };
        mousePressed = function() {
           return processing.__mousePressed;
        };
        mouseX = function() {
          return processing.mouseX;
        };
        mouseY = function() {
          return processing.mouseY;
        };
        size = function() {
            return processing.size.apply(this, arguments);
        };
        background = function() {
            return processing.size.apply(this, arguments);
        };
        strokeWeight = function() {
            return processing.strokeWeight.apply(this, arguments);
        };
        triangle = function() {
            return processing.triangle.apply(this, arguments);
        };
        // END OF PROCESSING SPECIFIC WRAPPER FUNCTIONS
        processing.setup = function() {
          processing.size(2000,690);
        };

        eval(editor.getValue());
    }
    var canvas = document.getElementById("canvas1");
    p = new Processing(canvas, sketchProc);
};
