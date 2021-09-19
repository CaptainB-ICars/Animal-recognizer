function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Aer3_D6mg/model.json',modalReady)
}


function modalReady()
{
    classifier.classify(gotResult)
}


function gotResult(error,results)
{
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("s-o-u-n-d").innerHTML="sound "+results[0].label;
        document.getElementById("a-c-c-u-r-a-c-y").innerHTML="accuracy "+(results[0].confidence*100).toFixed(2)+"%";

        jet1=document.getElementById("hi")
        jet2=document.getElementById("ci")
        jet3=document.getElementById("di")

        if (results[0].label=="horse") {
            jet1.src="hg.gif";
       
        }
        else if(results[1].label=="cat") {
            jet2.src="cg.gif"
        }
        else if(results[2].label=="dog") {
            jet3.src="dg.gif"
        }






    }
}
}