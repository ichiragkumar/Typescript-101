type checkResponse = (req: number, res: number) => number;

const saveuser: checkResponse = (req, res) => {
  return req + res;
};
const resutl = saveuser(10, 20);
console.log(resutl);

type erroerChecker = (
  req: string,
  res: string
) => { name: string; age: string };

const getError: erroerChecker = (req = "default 1", res = "default 2") => {
  return {
    name: req,
    age: res,
  };
};

const errorResult = getError("server error", "server logs");
console.log(errorResult);

function hello() {
  console.log("welcome");
}
hello();

function callme() {
  return "hii";
}

callme();
