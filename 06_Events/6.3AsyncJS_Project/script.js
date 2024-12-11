const hexColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const changeColor = ()=>{
    const currColor = hexColor();
    document.querySelector("#colorDiv").style.backgroundColor = currColor;
}
// title.style.backgroundColor
let intervalId;

document.querySelector("#start").
addEventListener('click',()=>{
    console.log("Starting changing color");
    if(!intervalId){
        intervalId = setInterval(changeColor,1000);
    }
});

document.querySelector("#stop").
addEventListener('click',()=>{
    clearInterval(intervalId);
    console.log("Color changing Stopped");
    intervalId = null;
})

