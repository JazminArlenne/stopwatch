window.onload = function (){
    
    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var setMinutes = document.getElementById("minutes");
    var setSeconds = document.getElementById("seconds");
    var setTens = document.getElementById("tens");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var btnReset = document.getElementById("btnReset");

    var interval;

    btnStart.onclick = function(){

        clearInterval(interval);
        interval = setInterval(timer, 10);
    }

    btnStop.onclick = function(){
        clearInterval(interval);
    
    }

    btnReset.onclick = function(){
        clearInterval(interval);

        tens = "00";
        seconds = "00";
        minutes = "00";
        setTens.innerHTML = tens;
        setSeconds.innerHTML = seconds;
        setMinutes.innerHTML = minutes;
    }

    function timer (){
        tens++;

        if(tens <= 9){
            setTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            setTens.innerHTML = tens;
        }
        
        if(tens > 60){
            seconds++;
            setSeconds.innerHTML = "0" + seconds;
            
            tens = 0; 
            setTens.innerHTML = "0" + tens;

        }

        if(seconds > 9){
            setSeconds.innerHTML = seconds;
        }

        if(seconds > 60){
            minutes++;
            setMinutes.innerHTML = "0" + minutes;

            seconds = 0;
            setSeconds.innerHTML = "0" + tens;
        }

        if(minutes > 9){
            setMinutes.innerHTML = minutes;
        }

        if(minutes > 60){
            clearInterval(interval);
        }
    }
}