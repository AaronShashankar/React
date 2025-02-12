import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState();

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (count % 2 !== 0 || count == 0) {
      setShowButton(false);
    } 
    return()=>{
      setShowButton(true);
    }
  }, [count]);

  return (
    <div>
      <h1>Conditional Rendering and Rendering Lists</h1>

      <div className="box">
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          update count
        </button>
        <br />
        <br />
        <br />
        {showButton ? 
          <button>I will be shown only when the count is even</button>
         : 
          ""
        }
      </div>

      <div className="box">
        <br /><br /><br />
        <button
          onClick={() => {
            setShowBtn(!showBtn);
          }}
        >
          Click Me...
        </button>
        <br />
        <br />
        <br />
        {showBtn && <button>I will be toggle when button is clicked</button>}
      </div>
    </div>
  );
};

export default App;
