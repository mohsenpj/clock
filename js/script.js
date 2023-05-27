let myHourElem =document.querySelector("#hour")
let myMinuteElem =document.querySelector("#minute")
let mySecondElem =document.querySelector("#seconds")


setInterval(function(){
    let myTime=new Date()
    let myHour=myTime.getHours()
    let myMinute =myTime.getMinutes()
    let mysecond =myTime.getSeconds()
    
    if(myHour<10){

    myHourElem.innerHTML="0"+myHour
    }
    else{
        myHourElem.innerHTML=myHour
    }
    if(myMinute<10){
        myMinuteElem.innerHTML="0"+myMinute
    }
    else{
        myMinuteElem.innerHTML=myMinute
    }
    if(mysecond<10){
        mySecondElem.innerHTML="0"+mysecond
    }
    else{
    mySecondElem.innerHTML=mysecond
    }    
},1000)
