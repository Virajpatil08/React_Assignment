import { useState, useEffect } from "react";

export default function CountdownLoader({ onFinish }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      setTimeout(onFinish, 500);
    }
  }, [count, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-5xl font-bold">
      {count > 0 ? count : "Welcome!"}
    </div>
  );
}
