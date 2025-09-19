import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

export function Counter() {
  const [customAmount, setCustomAmount] = useState(0);

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="space-x-8">
        <button
          className="bg-blue-500 py-3 px-4 text-white rounded-xl cursor-pointer"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-red-500 py-3 px-4 text-white rounded-xl cursor-pointer"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="flex items-center justify-center mt-8 w-xl mx-auto">
        <input
          type="number"
          className="py-3 px-2 outline-1 rounded-xl"
          placeholder="Input your number"
          onChange={(e) => setCustomAmount(+e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(customAmount))}
          className="bg-green-500 py-3 px-4 text-white rounded-xl cursor-pointer min-w-fit"
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}
