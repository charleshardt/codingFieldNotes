import { useEffect, useState } from "react";

// The most fundamental concept in React.js is state.

export default function App() {
  const [advice, setAdvice] = useState("");

  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Help yourself</button>
      <Message count={count} />
    </div>
  );
}

// We need to divide user interfaces into components.
// Uppercase, React convention for components.
function Message(props) {
  return (
    <p>
      I have helped you <strong>{props.count}</strong> times.
    </p>
  );
}
