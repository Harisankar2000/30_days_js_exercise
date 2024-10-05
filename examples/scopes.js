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

// const myName = ()=>console.log("hari")
// console.log(myName())
// console.log( 1+ null)


//spread and rest operator example

// const arr = [1,2,3,4]
// console.log(...arr) //spread

function display(first,second, ...other){
    console.log(first)
    console.log(second)
    console.log(other)  //rest operator

}
display(1,2,3,4,5,6)