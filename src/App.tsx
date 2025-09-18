import "./App.css";
import { Counter } from "./components/Counter/Counter";
import FormComponent from "./components/Form/Form";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import UserEvent from "./components/UserEvent/UserEvent";
import Users from "./components/Users/User";
import UserTable from "./components/UserTable/UserTable";

export const users = [
  { id: 1, name: "jhon", age: 23 },
  { id: 2, name: "Rian", age: 32 },
  { id: 3, name: "Bob", age: 12 },
  { id: 4, name: "Josh", age: 45 },
];

function App() {
  // const fruits = ["mango", "apple", "orange", "pineapple"];

  return (
    <div>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      {/* <Users />
      <FruitList fruits={fruits} /> */}
      {/* <UserTable users={users} /> */}
      {/* <UserEvent /> */}
      <FormComponent
        onSubmit={(data) => {
          console.log(data);
        }}
      />

      <Counter />
    </div>
  );
}

export default App;
