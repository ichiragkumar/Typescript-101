type checkResponse = (req:number, res:number) => {};

const saveuser:checkResponse = (req, res) =>{
    return {
        name:req,
        age:res
    }
}
const resutl = saveuser(10, 20)
console.log(resutl)


type erroerChecker = (req:string, res:string) => {}

const getError:erroerChecker = (req="default 1", res="default 2") =>{
    return {
        error:req,
        message:res,
    }
}

const errorResult = getError("server error", "server logs")
console.log(errorResult);

