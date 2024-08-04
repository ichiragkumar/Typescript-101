interface UserDB {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
}

// whenever you do a database call , specially in this case you will get this type
// you have the object in the pre-defined shape
//const proUser: UserDB = findOne({ email: "test@gmail.com" });

//TODO:  given you can only change
// 1. name
// 2. age
// 3. password

// option 1
// This is bad, because if you have to change the type of the field if any time,
// you have to changet the type of the whole object or UpdateProps
interface UpdateUserProps {
  name: string;
  age: number;
  password: string;
}

function updateUser(updatedProps: UpdateUserProps) {}

// Ideal options is use Pick

type UpdateProps = Pick<UserDB, "name" | "age" | "password">;
function updateUser2(updatedProps: UpdateProps) {}

interface TransactionDetails {
  amount: number;
  date: Date;
  from: string;
  To: string;
  transactionHash: string;
  message: string;
  status: Boolean;
}

type Txns = Pick<
  TransactionDetails,
  "from" | "To" | "transactionHash" | "message" | "status"
>;
function validateTransaction() {}

//TODO:  Partial - select partially
interface Quiz {
  question: string;
  answer: string;
  correct: boolean;
  user: string;
  date: Date;
  id: string;
}

const quizes = [
  {
    question: "What is the name of the first computer programmer?",
    answer: "Ada Lovelace",
    correct: false,
    user: "Ada Lovelace",
    date: new Date(),
    id: "1",
  },
  {
    question: "What is the name of the first computer programmer?",
    answer: "Ada Lovelace",
    correct: false,
    user: "Ada Lovelace",
    date: new Date(),
    id: "2",
  },
];

function getQuiz(id: string): Quiz | undefined {
  return quizes.find((quiz: Quiz) => quiz.id === id);
}

console.log(getQuiz("1"));
console.log(getQuiz("2"));

//TODO:  Adding Partial types to the existing type

// TODO: 1 First Pick the existing type
type QuizPartial = Pick<Quiz, "question" | "answer" | "correct">;

//TODO: 2 Add Partial to the existing type
type updateQuizProps = Partial<QuizPartial>;

function updateQuiz(updateProps: updateQuizProps) {
  // all param are optional now
}

//TODO: 3 , now the function not complaining, because all params are optional

const result12 = updateQuiz({
  question: "What is the name of the first computer programmer?",
});
const result13 = updateQuiz({
  question: "What is the name of the first computer programmer?",
  answer: "1",
});

//TODO: Output
console.log(result12);
console.log(result13);
