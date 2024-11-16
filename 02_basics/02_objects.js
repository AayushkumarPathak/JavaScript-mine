/* Singleton Objects */
const linkedinUser = new Object();
linkedinUser.id = "e231c"
linkedinUser.name = "akash"
linkedinUser.isLoggedin = true;

console.log(linkedinUser);

// Nested Objects -> Object in Object
const regularUser = {
    id:"e231c",
    posts:{
        post1:{
            id:"p1",
            title:"Programming",
            content:"Hello world"
        },
        post2:{
            id:"p2",
            title:"Health",
            content:"Health is wealth"
        }
    }
}

console.log("User all posts\n",regularUser.posts);
console.log("User Akash post 1:\n",regularUser.posts.post1);
console.log("User Akash post 2:\n",regularUser.posts.post2);

//  Optional Chaining for null safety -> used while using API Response.
// console.log(regularUser.posts.post1?.title);

/*Object Assign */
const obj1 = {1:"one",2:"two"}
const obj2 = {3:"three",4:"four"}
const obj3 = {4:"four",5:"five"}
const assignedObject = Object.assign({},obj1,obj2,obj3) 
// it return object as copy
// {} -> is optional parameter -> acts as a target object -> good syntax practice 
console.log(assignedObject);


/** Using Spread operator */
const allObj = {...obj1,...obj2,...obj3}
console.log("Spread operator: ",allObj);

/** When obj is coming from database
 * 
 * -> Generally object comes in form of array of objects
 * 
 */
const users = [
    {
        id:"io90",
        name:"akash"
    },
    {
        id:"ty6",
        name:"sanjay"
    },
    {
        id:"ku45",
        name:"nokia"
    }
]

console.log(users[0].name);
console.log(users[1].name);

console.log(Object.keys(linkedinUser)); // array data type
console.log(Object.values(linkedinUser));
console.log(Object.entries(linkedinUser));
console.log(linkedinUser.hasOwnProperty('isLoggedin'));










