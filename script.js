/**
 * Created by SaiKartheek on 3/1/2016.
 */

//login function
function login(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
        window.location.href ="mathSco1.html";
}


// Used URL parameters to pass the score values
function getScoreValue() {
    var url = window.location.href;
    if(url.indexOf("?")!==-1){
        var dataString = url.substring(url.indexOf("?")+1);
        var subString = dataString.substring(dataString.indexOf("=")+1);
        return subString.split(",");
    }
    else{
        return ['0','0','0','0','0','0'];
    }
}

//Function for submitting the question
function checkAnswer(type){
    var qquesanswered,qquescorrect,equesanswered,equescorrect,vquesanswered,vquescorrect;
    var details = getScoreValue();
    qquesanswered=parseInt(details[0]);
    qquescorrect=parseInt(details[1]);
    equesanswered=parseInt(details[2]);
    equescorrect = parseInt(details[3]);
    vquesanswered=parseInt(details[4]);
    vquescorrect=parseInt(details[5]);

    var corrected = false;
    var radioButtonElements = document.getElementsByName(type);
    for (var i = 0, length = radioButtonElements.length; i < length; i++) {
        if (radioButtonElements[i].checked && radioButtonElements[i].value === "true") {
            if(type === "mathques" ) {
                qquescorrect += 1;
            }else if(type==="cosineques"){
                qquescorrect += 1;
            }
            else
            {vquescorrect += 1}
            corrected = true;
            break;
        }
    }
    var data;
    if(type === "mathques"){
        qquesanswered += 1;
         data=qquesanswered+","+qquescorrect+","+equesanswered+","+equescorrect+","+vquesanswered+","+vquescorrect;
        window.location.href="mathSco2.html?details="+data;
    }else if(type === "cosineques"){
        qquesanswered += 1;
        data=qquesanswered+","+qquescorrect+","+equesanswered+","+equescorrect+","+vquesanswered+","+vquescorrect;
        window.location.href="engSco.html?score="+data;
    }else if (type=== "videoques") {
        vquesanswered += 1;
        data=qquesanswered+","+qquescorrect+","+equesanswered+","+equescorrect+","+vquesanswered+","+vquescorrect;
        window.location.href = "survey.html?score=" + data;
    }
}


function checkEnglishAnswer(){
    var qquesanswered,qquescorrect,equesanswered,equescorrect,vquesanswered,vquescorrect;
    var details = getScoreValue();
    qquesanswered=parseInt(details[0]);
    qquescorrect=parseInt(details[1]);
    equesanswered=parseInt(details[2]);
    equescorrect = parseInt(details[3]);
    vquesanswered=parseInt(details[4]);
    vquescorrect=parseInt(details[5]);

    var corrected = false;
    var moneyInputButtons = document.getElementsByName("engques1");
    var companyInputButtons = document.getElementsByName("engques2");
    for(var i= 0,length=moneyInputButtons.length;i<length;i++){
        if(moneyInputButtons[i].checked && moneyInputButtons[i].value === "true"){
            for(var j= 0,total=companyInputButtons.length;j<total;j++){
                if(companyInputButtons[i].checked && companyInputButtons[i].value === "true"){
                    corrected = true;
                    equescorrect=equescorrect+1;
                    break;
                }
            }
        }
    }
    equesanswered=equesanswered+1;
    var data=qquesanswered+","+qquescorrect+","+equesanswered+","+equescorrect+","+vquesanswered+","+vquescorrect;
    window.location.href="videoSco.html?score="+data;
}

function replaceMoneyValue(value){
    var elem = document.getElementById("cashValue");
    elem.value=value;
}

function replaceCompanyValue(value){
    var elem = document.getElementById("companyName");
    elem.value=value;
}

function getScoreCard(){
    var dataString;
    var url = window.location.href;
    if(url.indexOf("?")!==-1){
        dataString = url.substring(url.indexOf("?")+1);
    }
    window.location.href="summary.html?score="+dataString;
}

//Function to get summary
function getSummary(){
    var url = window.location.href;
    if(url.indexOf("?")!==-1){
        var dataString = url.substring(url.indexOf("?")+1);
        var substring = dataString.substring(dataString.indexOf("=")+1);
        var totalData=substring.substring(substring.indexOf("=")+1);
        var data=totalData.split(",");
        document.getElementById("quantanswered").innerText = data[0];
        document.getElementById("quantcorrect").innerText = data[1];
        document.getElementById("englishanswered").innerText = data[2];
        document.getElementById("englishcorrect").innerText = data[3];
        document.getElementById("videoanswered").innerText = data[4];
        document.getElementById("videocorrect").innerText = data[5];
        document.getElementById("quantscore").innerText = parseInt(data[1])*10;
        document.getElementById("englishscore").innerText = parseInt(data[3])*10;
        document.getElementById("videoscore").innerText = parseInt(data[5])*10;
    }
}

function exit(){
    window.location.href="index.html";
}

function clearSelection(type){
    var radioType = document.getElementsByName(type);
    for(var i = 0; i < radioType.length; i++) {
        if(radioType[i].checked == true) {
            radioType[i].checked = false;
        }
    }
}

// To clear selection
function clearQuesSelection(type1,type2){
    var radioQuesType1 = document.getElementsByName(type1);
    var radioQuesType2 = document.getElementsByName(type2);
    for(var i = 0; i < radioQuesType1.length; i++) {
        if(radioQuesType1[i].checked == true) {
            radioQuesType1[i].checked = false;
        }
    }
    for(var j = 0; j < radioQuesType2.length; j++) {
        if(radioQuesType2[j].checked == true) {
            radioQuesType2[j].checked = false;
        }
    }
}


// Function to draw co-ordinate axes using Canvas
function draw(){
    var canvas = document.getElementById("canvasContainer");
      if(canvas.getContext){
     //X-AXIS
     var ctx = canvas.getContext("2d");
     ctx.moveTo(20,10);
     ctx.lineTo(20,220);
     ctx.stroke();

     //Arrow-Head Y- AXIS
     var ctx = canvas.getContext("2d");
     ctx.moveTo(20,10);
     ctx.lineTo(10,20);
     ctx.stroke();

     var ctx = canvas.getContext("2d");
     ctx.moveTo(20,10);
     ctx.lineTo(30,20);
     ctx.stroke();

     //Arrow-Head X- AXIS
     var ctx = canvas.getContext("2d");
     ctx.moveTo(270,220);
     ctx.lineTo(260,210);
     ctx.stroke();

     var ctx = canvas.getContext("2d");
     ctx.moveTo(270,220);
     ctx.lineTo(260,230);
     ctx.stroke();

     // X- AXIS
     var ctx = canvas.getContext("2d");
     ctx.moveTo(20,220);
     ctx.lineTo(270,220);
     ctx.stroke();

     // LINE
     var ctx = canvas.getContext("2d");
     ctx.moveTo(20,220);
     ctx.lineTo(230,55);
     ctx.stroke();

     //POINT1
     var ctx = canvas.getContext("2d");
     ctx.fillStyle="#FF0000";
     ctx.fillRect(200,75,5,5);


     //POINT2
     var ctx = canvas.getContext("2d");
     ctx.fillStyle="#FF0000";
     ctx.fillRect(110,145,5,5);

     //TEXT POINT1

     var ctx = canvas.getContext("2d");
     ctx.font = "bold 10px Arial";
     ctx.fillStyle="black";
     ctx.fillText("(x2,y2)",180,65);

     //TEXT POINT2

     var ctx = canvas.getContext("2d");
     ctx.font = "bold 10px Arial";
     ctx.fillStyle="black";
     ctx.fillText("(x1,y1)",90,135);

     }
    else{
    var canvasContainer = document.getElementById("canvasContainer");
    canvasContainer.style.display="none";
    var image = document.createElement("img");
    var imageParent = document.getElementById("mmDiv");
    image.id = "canvasImage";
    image.src = "coordinateaxes.png";            // image.src = "IMAGE URL/PATH"
    imageParent.appendChild(image);
     }
}

