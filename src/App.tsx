import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/User";

function App() {
  const fruits = ["mango", "apple", "orange", "pineapple"];
  return (
    <div>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      <Users />
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
