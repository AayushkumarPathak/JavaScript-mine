const user = {
    username:"nitesh",
    price:399,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}

// user.welcomeMsg();
// user.username = "akash";
// user.welcomeMsg();
// console.log(this); //empty object in ide engine ||
// Global Window Object in Browser engine

/*
* Arrow Function
*/
// 1.
const addNum = (x,y) =>{
    return x+y;
}

console.log(addNum(2,5));

//2. Implicit return
const subNum = (n,m) => (n - m); // acts as callback
console.log(subNum(8,4));

const objR = () => ({username:"lpuin"})
console.log(objR());

const greetUser = (uname) => ({username:`${uname}`})
console.log(greetUser("pawan"));







