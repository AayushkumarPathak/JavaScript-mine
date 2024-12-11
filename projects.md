# Keyboard Event Project
```javascript
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${e.key === " " ?"Space":e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    </div>
    `;
});

```
# SetInterval Project Bg color changer
```javascript
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


```