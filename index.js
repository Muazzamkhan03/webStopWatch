let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let tenth = document.querySelector(".tenth");
let interval;

document.querySelector("#start").addEventListener('click',()=>{
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
})