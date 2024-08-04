// readonly

type rootUser = {
  readonly name: string;
  readonly age: string;
  gender: boolean;
};

const newUser1: rootUser = {
  name: "chirag",
  age: "32",
  gender: true,
};

console.log(newUser1);
