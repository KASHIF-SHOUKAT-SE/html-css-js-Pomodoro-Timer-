let timerInterval;
let timeLeft = 25*60;
let timerRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('Reset');

function formatTime(seconds){
    const minutes = Math.floor(seconds/60)
    const remainingSecond = seconds %60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSecond.toString().padStart(2,'0')}`;
}

function startTimer(){
    if(!timerRunning){
        timerRunning = true;
        startButton.textContent = 'Pause';
        timerInterval = setInterval(()=>{
            timeLeft--;
            if(timeLeft >= 0){
                timerDisplay.textContent = formatTime(timeLeft);   
            }else{
                clearInterval(timerInterval);
                timerRunning = false;
                startButton.textContent = 'Start'
                timeLeft = 25 * 60;
                timerDisplay.textContent = formatTime(timeLeft);   
            }
        },1000);
    }else{
        clearInterval(timerInterval);
        timerRunning =false;
        startButton.textContent = 'Start'
    }
}

function resetTimer(){
    clearInterval(timerInterval);
    timerRunning = false;
    timeLeft = 25 * 60 ;
    timerDisplay.textContent = formatTime(timeLeft);
    startButton.textContent = 'Start';
}

startButton.addEventListener('click', startTimer)
resetButton.addEventListener('click', resetTimer)

