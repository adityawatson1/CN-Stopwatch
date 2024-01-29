// assigning variable to sec, min , msec

let sec = 0;
let min = 0;
let msec = 0;

// Stopwatch Start button Function

function start(){
     watch = true;
    runWatch();
}

// Stopwatch Stop button Function

function stop(){
    watch = false;
}

// Stopwatch Reset button Function

function reset(){
    watch = false; 
    min = 0; 
    sec = 0; 
    msec = 0;
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('msec').innerHTML = "00";
    
}

// Stopwatch Timer Function
setInterval("runWatch()", 10)
function runWatch(){
     if(watch == true){
        msec++;
        if(msec == 100){
            sec++;
            msec = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            min = 0;
        }

        // Creating variable to assign 0 if timer is less than 10
        
        let Milisec = msec;
        let Second = sec;
        let Minute = min;
        
        if(msec < 10){
            Milisec = "0" + msec;
        }
        if(sec < 10){
            Second = "0" + sec; 
        }
        if(min < 10){
            Minute= "0" + min;
        }
        
        document.getElementById("sec").innerHTML=Second;
        document.getElementById("min").innerHTML=Minute;
        document.getElementById("msec").innerHTML=Milisec;
     }
}
