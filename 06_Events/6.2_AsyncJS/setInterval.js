const start = function(){
    const d = new Date();
    console.log("Aayush",d.toLocaleTimeString());
};

let intervalId;

document.querySelector("#start")
.addEventListener("click",()=>{
    console.log("Starting");
    
    intervalId = setInterval(start,2000);
})

document.querySelector("#stop")
.addEventListener("click",()=>{
    console.log("Ending");
    
    clearInterval(intervalId);
    intervalId = null;
});
