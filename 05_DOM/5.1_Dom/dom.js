const title = document.getElementById('title')
console.log(title);

title.style.backgroundColor = "green"
title.style.padding = "10px"
title.style.borderRadius = "20px"

console.log(title.innerText);
console.log(title.textContent);
/**
 * const title = document.getElementById('title')
 * title.innerHTML -> gives the whole html with tag.
 * title.innerText -> show the text that is visible.
 * title.textContent -> show the text that is written in tag.
*/

const qs = document.querySelectorAll('h2');
console.log(qs);

document.querySelector("#title")
document.querySelector(".heading")

const myul = document.querySelector("ul")
console.log(myul);

const turnYellow = myul.querySelector("li");
turnYellow.style.backgroundColor = "yellow"
turnYellow.style.padding = "10px"
turnYellow.style.color = "blue"
//query selectorAll returns Nodelist

const templi = document.querySelectorAll("li")
console.log(templi);
templi[0].style.color="black"
templi.forEach(function (l){
    l.style.backgroundColor = "green"
})

// Conversion of HTMLCollection to Array


const cli = document.getElementsByClassName("item-li");
console.log(cli); // html collection

const acli = Array.from(cli);
console.log(acli);
acli.forEach((item)=>item.style.color="orange")
acli.forEach(function(it){
    it.style.color="blue"
})

acli.map(function(x){
    x.style.color = "red"
})

acli.map((y)=>y.style.color="violet")





