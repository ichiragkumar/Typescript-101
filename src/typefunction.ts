type checkResponse = (req:number, res:number) => {};



const saveuser:checkResponse = (req, res) =>{
    return {
        name:req,
        age:res
    }
}

const resutl = saveuser(10, 20)
console.log(resutl)