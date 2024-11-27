import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementer,
  decrementer,
  incrementerByAmount,
} from "./features/counter/CounterSlice";

function Counter() {
  const [number, setNumber] = useState(0);

  const displayedNumber = useSelector((state) => state.counter.displayedNumber);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(incrementer())}>Incrementer</button>
      <button onClick={() => dispatch(decrementer())}>Decrementer</button>
      <button onClick={() => dispatch(incrementerByAmount(Number(number)))}>
        Incrementer By Amount
      </button>
      <h1 className="text-2xl text-blue-800">{displayedNumber}</h1>
    </>
  );
}

export default Counter;
