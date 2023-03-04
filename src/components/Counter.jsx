import React, { useState, useEffect } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    setCount(Math.floor(Math.random() * 11));

//cuando el componente se desmonta se ejecuta el return
    return () => {
      setCount(0);
      setColor("texto");
    };
  }, []);

  useEffect(() => {
    if (count <= 0) {
      setColor("red");
    } else if (count <= 5) {
      setColor("orange");
    } else {
      setColor("green");
    }
  }, [count]);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>
        Counter: <span className={color}>{count}</span>
      </p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease}>- Decrease</button>
    </div>
  );
}
