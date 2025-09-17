import { useState } from "react";

export default function UserEvent() {
  const [loveCount, setLoveCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  return (
    <section>
      <div className="flex">
        <h1>Go ahead and type something: </h1>
        <h2>{userInput}</h2>
      </div>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <br />
      <br />
      <div>
        <h3>Your wife loves you {loveCount} times!</h3>
        <button onClick={() => setLoveCount(loveCount + 1)}>
          Make her love you more
        </button>
        <button onClick={() => setLoveCount(0)}>Reset</button>
      </div>
    </section>
  );
}
