const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body")
const heading = document.querySelector(".head1")
buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click",(e)=>{
        // {
        //     // console.log(e);
        // // console.log(e.target);

        // // if(e.target.id === "burlywood"){
        // //     body.style.backgroundColor = e.target.id;
        // // }
        // // else if(e.target.id === "violet"){
        // //     body.style.backgroundColor = e.target.id;
        // // }
        // // else if(e.target.id === "blue"){
        // //     body.style.backgroundColor = e.target.id;
        // // }
        // // else if(e.target.id === "yellow"){
        // //     body.style.backgroundColor = e.target.id;
        // // } 
        // } 

        switch (e.target.id) {
            case "burlywood":
                body.style.backgroundColor = e.target.id;
                heading.style.color = "black";
                break;
            case "violet":
                body.style.backgroundColor = e.target.id;
                heading.style.color = "black";
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                heading.style.color = "Yellow";
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                heading.style.color = "tomato";  
            default:
                break;
        }
    })
})