//object literals
const mySym = Symbol("Key1")

const JsUser = {
    name:"Aayush Pathak",
    age:"18",
    [mySym]:"myKey1",
    "full name":"Aayush Kumar Pathak",
    email:"aayushkumar@amazon.com",
    password:"ak122AmazonIndiaRnc",
    isLoggedIn:false,
    loggedInDays:["Mon","Tue","Wed","Thr","Fri"]
};

// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log( typeof JsUser[mySym]);

JsUser.email = "aayushp@amazon.com"
// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "aayushkr@microsoft.com"
// console.log(JsUser);
// console.log(JsUser.full name); //#Cannot be used like this!!

JsUser.greetingDefault = function(){
    console.log("Hello User Guest");
}

JsUser.greetByUser = function(){
    console.log(`Hello User ${this.name}`);
}

console.log(JsUser.greetingDefault());
console.log(JsUser.greetByUser());






