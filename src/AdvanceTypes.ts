interface UserDB {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
}

// whenever you do a database call , specially in this case you will get this type
// you have the object in the pre-defined shape
const proUser: UserDB = findOne({ email: "test@gmail.com" });

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
