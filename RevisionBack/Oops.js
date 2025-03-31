class Person {
  name;

  constructor(name) {
    this.name = name;
  }
  introduceYourself() {
    console.log(`Hi my name is ${this.name}`);
  }
}

const abhishek = new Person("abhishek", 12);
console.log(abhishek.name);
abhishek.introduceYourself();

//Inheritance
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceYourself() {
    console.log(
      `Hello, My name is ${this.name} and I will be your ${this.teaches} professor.`
    );
  }

  
}

const ramesh = new Professor("Ramesh","Physics");

ramesh.introduceYourself();


/**
 * Encapsulation 
 * -> to hide the properties of the class and provide method's to 
 * access and modify the properties
 * 
*/

class Student extends Person{
    #year; //pvt var or property

    constructor(name,year){
        super(name);
        this.#year = year;
    }

    introduceYourself(){
        console.log(
            `Hi! I'm ${this.name}, and I'm in year ${this.#year}`
        );
        
    }

    canPlayArcher(){
        return this.#year > 1;
    }

    somePublicMethod(){
        this.#somePrivateMethod();
    }

    #somePrivateMethod(){
        console.log("I am Private method i can be called by public method only");
    }
}
console.log("\n\n");

const student1 = new Student("akash",2);
student1.introduceYourself();
console.log(
    student1.canPlayArcher() ? "Allowed to play Archery" : "Not allowed to play Archery"
);

student1.somePublicMethod();
student1.canPlayArcher

// student1.#year = 19;
/**
 * Property '#year' is not accessible outside class 
 * 'Student' because it has a private identifier
 */

// student1.#somePrivateMethod(); ->
/**
 * Property '#somePrivateMethod' is not accessible outside 
 * class 'Student' because it has a private identifier.
 */




 


