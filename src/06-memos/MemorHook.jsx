import { useState, useMemo } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos")
  }

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
  const {counter, increment} = useCounter(5000);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}