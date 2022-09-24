function time(){
    t++;

    if(t<=9){
        document.querySelector(".tenth").innerHTML = "0" + t;
    }
    else{
        document.querySelector(".tenth").innerHTML = t;
    }
    if(t>=99){
        s++;
        t = 0;
        document.querySelector(".tenth").innerHTML = "0" + t;
    }
    if(s<=9){
        document.querySelector(".sec").innerHTML = "0" + s;
    }
    else{
        document.querySelector(".sec").innerHTML = s;
    }
    if(s>=60){
        m++;
        s=0;
        document.querySelector(".sec").innerHTML = "0" + s;
    }
    if(m<=9){
        document.querySelector(".min").innerHTML = "0" + m;
    }
    else{
        document.querySelector(".min").innerHTML = m;
    }
}


let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let tenth = document.querySelector(".tenth");
let m = 0, s = 0, t = 0;
let interval;

document.querySelector("#start").addEventListener('click',()=>{
    m = 0, s = 0, t = 0;
    clearInterval(interval);
    interval = setInterval(time,10);
});

document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(interval);
});

document.querySelector("#reset").addEventListener('click',()=>{
    min.innerHTML = "0"+0;
    sec.innerHTML = "0"+0;
    tenth.innerHTML = "0"+0;
});