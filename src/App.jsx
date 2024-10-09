import { useEffect, useState } from "react";
export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);

  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((c) => c + 1);
  }
  useEffect(function () {
    getadvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>Get Advice</button>
    </div>
  );
}

function Message() {
  return (
    <p>
      you have read <strong>{count}</strong>piece of advice.
    </p>
  );
}
