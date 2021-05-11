const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#startBtn');
const pauseButton = document.querySelector('#pauseBtn');
const circle = document.querySelector('circle');
//calculating perimeter of circle
const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
//defining offset
let currentOffset = 0;

const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(timeDuration){
        console.log('Timer Started!!!!');
        duration = timeDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining/duration -perimeter
        );
    },
    onComplete(){
        console.log('Timer Completed!!')
    }
});