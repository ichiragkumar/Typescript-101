
const arr1:number[] = [1,2,3,4,5];
const arr2:string[] = ["sad", "lad", "mad"];

console.log(arr1);
console.log(arr2);


// most used type array in typescript

const arry3:Array<number> = [1,2,3,4,5];
const arry4:Array<string> = ["sad", "mad", "lad", "dad"]; 

console.log(arry3);
console.log(arry4);



// number and string both
const details:Array<string| number> = ["chirag", "kumar", 23,435]
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




