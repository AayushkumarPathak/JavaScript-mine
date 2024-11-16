/**
 * Object Destructure
 * JSON API
 */
const course = {
    id:"u49w",
    name:"Gen ai",
    courseInstructor:"Decker"
}

const {courseInstructor:instr} = course;
console.log(instr);

// how object destructure used in react props
// const navbar = ({company}) =>{

// }
// navbar(company="LPU")

// ****** JSON -> generally it is obj
// {
//     "name":"test",
//     "title":"test"
// }

// ******* JSON -> array of obj
// [
//     {},
//     {},
//     {}
// ]

