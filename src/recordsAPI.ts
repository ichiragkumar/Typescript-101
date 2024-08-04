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

console.log("| -------------------------- |");
//TODO: 2. Maps in Typescript || Though it's javscript concept

// 1. Map is better becuase ,we have acces to get/set methods
// 2. As compare to Records
type TodoTaks = {
  taskId: string;
  endDate: Date;
  points: number;
  slugs: string;
};

const toods = new Map<string, TodoTaks>();
toods.set("1", {
  taskId: "1",
  endDate: new Date(),
  points: 100,
  slugs: "1,2,3",
});
toods.set("2", {
  taskId: "2",
  endDate: new Date(),
  points: 200,
  slugs: "1,2,3",
});

const task1 = toods.get("1");
const task2 = toods.get("2");

console.log(task1);
console.log(task2);
