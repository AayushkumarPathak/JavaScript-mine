
const sayName = function(){
    console.log("Aayush");
}
setTimeout(sayName,2000)

setTimeout(()=>{
   document.querySelector("#name").
   innerHTML = "Hello Aayush! Offer closing soon!"
    
},4000)

// change text
const changeText = () =>{
    document.querySelector("h1").
    innerText = "Lovely Professional University";
}
const changingText = setTimeout(changeText,3000)

document.querySelector("#stop").
addEventListener('click',function(){
    clearTimeout(changingText);
    console.log("STOPPED");
})