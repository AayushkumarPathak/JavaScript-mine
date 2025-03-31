const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task done");
    resolve();
  }, 1000);
});
promise1.then(function () {
  console.log("Promise1 Consumed");
});
// console.log("\n\n");

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task2 done");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise2 Done");
});
// console.log("\n\n");

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Data received");
    resolve({ userName: "striver21", email: "st@email.com" });
  }, 1000);
});

promise3.then(function (obj) {
  console.log(obj);
});

// console.log("\n\n");

new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { username: "Aayush122", email: "ak@email.com" };
    resolve(user);
  }, 1000);
}).then((user) => {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ username: "akash", password: "123" });
    } else {
      reject("Error: Something went wrong.404!");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ username: "vikash", password: "123" });
    } else {
      reject("Error: JS went wrong.404!");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

async function getAllUsers(){
  try {
    //fetch is also a promise need to await
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); // also  a promise need to await
    console.log(data);
    
  } catch (error) {
    console.log("Error:",error);
    
  }
}
getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
  
// })
// .catch((e)=>{
//   console.log(e);
  
// })
