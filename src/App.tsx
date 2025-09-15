import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/User";

function App() {
  return (
    <div>
      <PrimaryButton />
      <PrimaryButton actionType="Delete" />
      <Users />
    </div>
  );
}

export default App;
