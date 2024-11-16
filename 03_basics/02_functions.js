function addTwoNumbers(n, m) {
  console.log(n + m);
}

addTwoNumbers(4, 3);
const res = addTwoNumbers(4, 4);
// console.log("Result: ",res); // not returning anything

function multiplyNums(i, j) {
  let ans = i * j;
  return ans;
  //console.log("Hello");// unreachable code
}

const mulAns = multiplyNums(2, 2);
console.log("multiply ans", mulAns);

function loginUser(name) {
  if (name === undefined) {
    //!name
    console.log("Please Login again session expired");
    return;
  }
  return `LoggedIn user ${name}`;
}

console.log(loginUser("akash"));
console.log(loginUser());

function calculateCartPrice(val1, val2, ...num1) {
  //rest operator
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 1200));
/** Here val1 ->200, val2 -> 400 ,rest remaining num1 took the
 *  values and added it into array
 * */

const user = { 
    uname: "aayushakp", 
    email: "ak@io.com" 
};

function handleUser(anyUser){
    console.log(`Username is: ${anyUser.uname} email is: ${anyUser.email}`);
}
handleUser(user);

handleUser({
    uname:"akash",
    email:"akh@ui.com"
});
