import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Help me help you");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Help yourself</button>
    </div>
  );
}

// state is the most fundamental concept in React
