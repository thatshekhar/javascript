// function Dec(){
//     return ("Declaration function")

// }
// console.log(Dec())

// function sum(a, b){
//    console.log(a + b)   
// }
// sum(10, 20)



// function expression

// let Exp = function(){
//     console.log("Expression function")
// } 
// Exp()


//arrow function 
// let arr = () => {
//     console.log("Arrow function")
// }
// arr()
// // ex-
// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(10, 20));

// IIFE (imidate invoke function expression)


// (function(){
//     console.log("IIFE function")
// })();


// HOF function
// function HOf(fun){
//     console.log("HOF function")
//     fun()
// }
// function call(){
//     console.log("Call function")
// }
// HOf(call)

// nested function

function parent() {
    console.log("Parent function")
    let child1 = () => {
        console.log("nested")
    }
     let child2 = () => {
        console.log("function")
     }
     child1()
     child2()
}
parent()