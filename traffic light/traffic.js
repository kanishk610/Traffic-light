let container=document.querySelector(".container")
let body=document.querySelector("body");
let switchElement=document.querySelector(".switch input");



let interval;
let light=document.querySelectorAll(".lights");
let color=["red","yellow","green"];
let index=0;
function trafficlight(){
light.forEach((light)=>{
    light.style.background="grey";
    light.style.boxShadow="none";
});
light[index].style.background=color[index];
light[index].style.boxShadow = `0 0 20px ${color[index]}`;
index=(index+1)%3;
}
trafficlight();
// setInterval(trafficlight,2000);

switchElement.addEventListener('change',()=>{
    body.classList.toggle("dark");
    container.classList.toggle("light-container");
    
})
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let cross=document.querySelector("#cross");

start.addEventListener('click',()=>{
    interval=setInterval(trafficlight,2000);
    
});
stop.addEventListener('click',()=>{
    clearInterval(interval);
});

cross.addEventListener('click',()=>{

    clearInterval(interval);

    light.forEach((light)=>{
        light.style.background="grey";
        light.style.boxShadow="none";
    });

    light[0].style.background="red";
    light[0].style.boxShadow="0 0 20px red";

    setTimeout(() => {
      
        index = 1;

        interval=setInterval(trafficlight,2000);

    },4000);

});