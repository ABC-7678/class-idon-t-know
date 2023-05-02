function prealooad(){
    classifier=ml5.imageClassifier('DoddleNet');

}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function clearcanvas(){
    background("white");
}

function draw(){
    strokeWeight(7);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);

    }
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    console.log(results);
}