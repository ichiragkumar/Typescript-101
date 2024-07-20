


const arr1:number[] = [1,2,3,4,5];
const arr2:string[] = ["sad", "lad", "mad"];


// most used type array in typescript

const arry3:Array<number> = [1,2,3,4,5];
const arry4:Array<string> = ["sad", "mad", "lad", "dad"]; 


// number and string both
const details:Array<String| number> = ["chirag", "kumar", 23,435]
console.log(details);


const arrayofResponse:Array<{name:string, age:number, isLoggedIn:boolean}> = [
    {
        name: "John",
        age:34,
        isLoggedIn:true

    },
    {
        name:"Rohit",
        age:30,
        isLoggedIn:false
    }
]

console.log(arrayofResponse);




