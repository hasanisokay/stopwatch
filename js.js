const stopwatch = document.getElementById("stopwatch")
let num = 0;
let intervalID; 
function startStopwatch(){
    intervalID = setInterval(displayStopwatch, 1000);
}
function displayStopwatch(){
    stopwatch.innerText = num;
    num ++
}
function stopStopwatch(){
    clearTimeout(intervalID)
}
function resetStopwatch(){
    stopStopwatch()
    stopwatch.innerText = 0;
    num = 0; 
}
