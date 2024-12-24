
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let mytimer;
let min=0;
let sec=0;




 start.addEventListener("click", function(){

    start.disabled = true;
    mytimer =  setInterval(function(){
        seconds.innerHTML = Number(seconds.innerHTML)+1;
        if(Number(seconds.innerHTML)<10){
            seconds.innerHTML='0'+seconds.innerHTML;
        }
        if(seconds.innerHTML==60){
            seconds.innerHTML='00';
            minutes.innerHTML=Number(minutes.innerHTML)+1;
            if(Number(minutes.innerHTML)<10){
                minutes.innerHTML='0'+minutes.innerHTML;
            }
            if(Number(minutes.innerHTML)==60){
                clearInterval(mytimer);
                seconds.innerHTML='00';
                minutes.innerHTML='00';
            }
        }

    },100);


});


stop.addEventListener("click",function(){
   start.disabled = false;
    clearInterval(mytimer);

});


reset.addEventListener("click",function(){
    minutes.innerHTML='00';
    seconds.innerHTML='00';
})