/** IF  */

const username = "";
if(username === "admin"){
    console.log("Please Login in admin dashboard");
}
else{
    console.log("User LoggedIn Success.");
}

// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
  
// rl.question('What is your Age? ', (age) => {
//     if(age>18){
//         console.log("Allowed to vote. V card required.");
//     }
//     else if(age==18){
//         console.log("If Voter card, Allowed to vote.");
//     }
//     else if(age<18){
//         console.log("Not allowed to vote UnderAge!");
        
//     }
//     rl.close();
// });


// for (let index = 0; index <= 10; index++) {
//     console.log(index);
    
// }

// for(let i=1;i<=10;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);   
// }

let count = 11

while(count>0){
    console.log(count);
    count--;
    
}

let myage = 1;
do {
    console.log("ELigible for work at",myage);
    myage++;
    
} while (myage<12);



