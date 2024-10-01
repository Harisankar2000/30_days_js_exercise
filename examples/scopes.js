//var vs let vs const
//var is a function scope and let,const are a block scope
// var example with code

// function example(){
//     if(true){
//         var myName = "Harisankar"
//         console.log(myName);
//     }
//     console.log(myName);
// }
// example();

// let example with code

// function example(){
//     if(true){
//         let myName = "Harisankar"
//         console.log(myName);
//     }
//     console.log(myName);
// }
// example();  // will give ReferenceError: myName is not defined

// const example with code

// const myName = "Harisankar"
// myName = "Ravi"
// console.log(myName);  // TypeError: Assignment to constant variable.

//arrow function

const myName = ()=>console.log("hari")
console.log(myName())