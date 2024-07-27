

type UserProfile = {
    height:number;
    weight:number;
    gender:boolean;
}


const newUerProfiler:UserProfile = {
  height:190,
  weight:90,
  gender:true,
}

console.log(newUerProfiler);


// make optional object member


type txnData =  {
    amount:number,
    address:string,
    name:string,
    email?:string,
}


const newTxnData:txnData = {
  amount:100,
  address:"123 Main Street",
  name:"John Doe",
  email:"johndoe@gmail.com",
}
console.log(newTxnData);

