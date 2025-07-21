let [seconds,minutes,hours]=[0,0,0];
let timer=null;
function stopwatch(){
  let s= seconds <10 ? "0"+ seconds : seconds;
 let m= minutes <10 ? "0"+ minutes : minutes;
 let h= hours <10 ? "0"+ hours : hours;
 document.getElementById("display").innerText=`${h}:${m}:${s}`;
}
function clock(){
  seconds++;
  if(seconds===60){
     seconds=0;
  
    minutes++;
 if(minutes===60){
    minutes=0;
   hours++;
  
 }
}
stopwatch()
}
function start(){
  if(timer===null){
   timer=setInterval(clock,1000);
    
  }
}
function stop(){
  clearInterval(timer);
  timer=null;
}
function reset(){
  clearInterval(timer);
  timer=null;
  [seconds,minutes,hours]=[0,0,0];
  stopwatch();
}
stopwatch()
