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

//TODO: 2. Make the whole object readonly
type rootUser2 = {
  name: string;
  age: number;
  gender: boolean;
};

const newUser2: Readonly<rootUser2> = {
  name: "chirag",
  age: 32,
  gender: true,
};

console.log(newUser2);
