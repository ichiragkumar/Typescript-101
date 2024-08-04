interface Usertwo {
  name: string;
  age: number;
}

function someofAge(user1: Usertwo, user2: Usertwo) {
  return user1.age + user2.age;
}

const result1 = someofAge({ name: "John", age: 20 }, { name: "Jane", age: 30 });
console.log(result1);
