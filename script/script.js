let min=0
let sec=0
let hrs=0
let count=0
let hrsst
let minst
let secst
let countst
let btnop=document.getElementById("stop");
let btnre=document.getElementById("reset");
let btnst=document.getElementById("start");
btnst.addEventListener('click',function(){
    timer=true;
    stopWatch();
 });
btnre.addEventListener('click',function(){
    timer=false;
    document.getElementById('Hrs').innerHTML='00:';
    document.getElementById('Mins').innerHTML='00:';
    document.getElementById('Sec').innerHTML='00.';
    document.getElementById("Count").innerHTML='00';
    hrs=0;
    min=0;
    sec=0;
    count=0;
 });
btnop.addEventListener('click',function(){
    timer=false;
    stopWatch();
 });
 function stopWatch(){
    if(timer){
        count++;
        if(count==100){
            sec++;
            count=0
        }
        if(sec==60){
            min++
            sec=0
        }
        if(min==60){
            hrs++
            min=0
            sec=0
        }
    hrsst=hrs+':'
    minst=min+':'
    secst=sec+'.'
    countst=count
    if(hrs<10){
        hrsst="0"+hrs+':'
    }
    if(min<10){
        minst="0"+min+':'
    }
    if(sec<10){
        secst="0"+sec+'.'
    }
    if(count<10){
        countst="0"+count
    }
    
    
    
    document.getElementById("Hrs").innerHTML=hrsst;
    document.getElementById("Mins").innerHTML=minst;
    document.getElementById("Sec").innerHTML=secst;
    document.getElementById("Count").innerHTML=countst;
    setTimeout(stopWatch,1);
 }
}

