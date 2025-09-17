import React, { useState } from "react";

export default function FormComponent({
  onSubmit,
}: {
  onSubmit: (inputValue: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <section>
      <h2>{inputValue}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
