type mainUser = {
  id: number;
  name: string;
  age: number;
  gender: string;
};

type Users = {
  [key: string]: mainUser;
};

const users: Users = {
  user1: {
    id: 1,
    name: "John",
    age: 30,
    gender: "male",
  },
  user2: {
    id: 2,
    name: "Jane",
    age: 25,
    gender: "female",
  },
  user3: {
    id: 3,
    name: "Bob",
    age: 35,
    gender: "male",
  },
};

console.log(users);
// TODO: 1. it is something that can be optimized well
// so herer comes , Records and Maps

type Users2 = Record<string, mainUser>;

const users2: Users2 = {
  user1: {
    id: 1,
    name: "chirag",
    age: 40,
    gender: "male",
  },
  user2: {
    id: 2,
    name: "Mukesh",
    age: 25,
    gender: "female",
  },
  user3: {
    id: 3,
    name: "Sanjana",
    age: 35,
    gender: "female",
  },
};

console.log(users2);
