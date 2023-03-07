const min = document.getElementById("stopwatch-min")
const second = document.getElementById("stopwatch-second")
const hours = document.getElementById("stopwatch-hours")
const ms = document.getElementById("stopwatch-milisecond")
let secondCounter = 0;
let msCount = 0;
let intervalID;
let intervalID2
let started = false
function startStopwatch(){
    if (started ==false){
        started = true;
        intervalID2 = setInterval( displayMilisecond ,16.67);
        intervalID = setInterval(displayStopwatch, 1000);
    }
    else{
        return
    }
}
function displayMilisecond(){
    if(msCount ==100){
        msCount = 0;
    }
    ms.innerText = msCount++
}
function displayStopwatch(){
    if (secondCounter ===60){
        let minPrevious = parseInt(min.innerText)
        secondCounter =0
        min.innerText = minPrevious + 1
    }
    second.innerText = secondCounter++

}
function stopStopwatch(){
    clearTimeout(intervalID)
    clearTimeout(intervalID2)
    started = false
}
function resetStopwatch(){
    stopStopwatch()
    second.innerText = "00" 
    min.innerText ="00" 
    hours.innerText ="00" 
    secondCounter = 0
    msCount = 0
}
