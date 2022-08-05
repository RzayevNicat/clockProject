const hourEl = document.querySelector("#hour")
const minuteEL = document.querySelector("#minute")
const secondEl = document.querySelector("#second")
const ampmEl = document.querySelector("#ampm")

function updateClock(e){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h>12){
        h=h-12;
        ampm="PM"
    }
    if(h<10){
        h="0"+h;
        
    }    
    if(s<10){
        s="0"+s;
        
    }
    if(m<10){
        m="0"+m;
        
    }

    hourEl.innerText=h;
    minuteEL.innerText=m;
    secondEl.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)
    

}
updateClock();