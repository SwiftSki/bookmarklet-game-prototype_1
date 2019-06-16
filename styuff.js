var sketchProc = function(processingInstance) {
    with (processingInstance) {
            size(400, 400);
            frameRate(30);

            // ProgramCodeGoesHere
    background(255, 255, 255);    
    fill(0, 0, 0);
    ellipse(200, 200, 20, 20);
    }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);

