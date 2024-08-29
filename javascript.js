var playing = false;
var score;
var action;
var timeremaining;

document.getElementById("startreset").onclick = function(){

    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 1;
document.getElementById("scorevalue").innerHTML = score;
document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
document.getElementById("timeremainingvalue").innerHTML = timeremaining;        
document.getElementById("startreset").innerHTML = "Reset Game";

           startCountdown();
    }
}


















function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
         if(timeremaining == 0){
             stopCountdown();
             document.getElementById("gameOver").style.display = "block";
             document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p></p>"
         }        
    } , 1000);
}

function stopCountdown(){
    clearInterval(action);
}