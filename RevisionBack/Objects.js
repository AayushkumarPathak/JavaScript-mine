const person = {
    name:{
        first:"aayush",
        last:"pathak"
    },
    age:20,
    address:["Ranchi","Dugda"],

    bio : function(){
        console.log("This is bio");
    },
    introduceYourself(){
        console.log(`Hi i am ${this.name.first}`);
    }
};

console.log(person.name);
console.log(person.name.first);

console.log(person["address"]);
person.bio();
person.introduceYourself();

person["password"] = "abcd#5yu";

console.log("\n\n",person);
person["age"] = 12;
console.log("\n\n",person);




