// Immediately Invoked Function Expression(IIFE)
//  1.
;(function connectDb(){
    console.log("Db connected.");
})(); 

/**
 * if semicolon missed then compiler will throw error
 * because it dont know where to stop the context.
 */
//  2.
(()=>{
    console.log("Again Db connection was made.");
} ) ();

//  3.
((name)=>{
    console.log(`Db connection made by ${name}`);
    
})('admin');
// good practice to make a semicolon before starting IIFE

