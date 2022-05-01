var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
if (content == "Take my selfie"){
    console.log("Taking selfie");
    speak();
}

    

}
function speak(){
    var synth = window.speechSynthesis;
    var speakData = "Taking your selfie in five seconds"
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    
    }, 2000);
}

Webcam.set({
    width:360, height:250 , image_format :'jpeg', jpeg_quality:90
});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "selfie_image" src='+data_uri+'/>';
    });
}

function save(){
    link = document.getElementById("link");.
    image = document.getElementById("picture.jpeg").src;
    link.href = image;
    link.click();
}

