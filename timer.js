class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        
        //when start clicked , event happens 
        startButton.addEventListener('click',this.start);
        pauseButton.addEventListener('click',this.pause);
    }
    start=()=>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
            this.startButton.disabled = true;
        }
        this.tick();
        this.timer = setInterval(this.tick,20);
    }
    tick=()=>{
        const timeRemaining = this.timeRemaining;
        if(timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else{
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }
    pause=()=>{
        clearInterval(this.timer);
        this.startButton.disabled = false;
    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
}