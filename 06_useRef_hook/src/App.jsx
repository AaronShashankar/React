import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const ref = useRef();

  useEffect(() => {
    ref.current.style.backgroundColor = "red";
  }, []);

  return (
    <div>
      <p><strong>useRef</strong> in react allows you to reference a value that's not needed for rendering.</p>
      <ul>
        <li>it can be used to store mutable value that does not cause re-render when update</li>
        <li>it can be used to access a DOM element directly.</li>
      </ul>
      <h1>useRef Hooks</h1>
      <div>
        <h1>{count}</h1>
        <button
          ref={ref}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          change count
        </button>
      </div>
    </div>
  );
};

export default App;
