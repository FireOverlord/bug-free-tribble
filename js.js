Webcam.set({
    height:400,
    width:400,
    image_format="png"
    png_quality:100
});
camera=document.getElementById("Webcam");
Webcam.attach('#Webcam');
function takeSnap(){
    Webcam.snap(function(data_uri){
document.getElementById("snap").innerHTML='<img id="snapped" src="'+data_uri+'"/>'
    });
}
console.log('m15 version:', m15.version)
classifier=m15.imageClassifier("https://teachablemachine.withgoogle.com/models/jbUAbVOuX/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
function idSnap(){
    img=document.getElementById("snapped");
classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}else{
    document.getElementById("result").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(4);
}
}
