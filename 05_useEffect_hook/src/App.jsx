import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //it will run on the every render
  useEffect(() => {
    console.log("hey there ");
  });

  // it will run on the app is loaded (first render)
  useEffect(() => {
    alert("Don't Refresh the Page ");
    return () => { //when ever the component is unmounted from the page this will run and tell what to show after that (clean up)
      alert("the component was removed");
    };
  }, []);

  // it will run whenever the count will be mounted (somthing is changed/update)
  useEffect(() => {
    alert("Count was Changed ");
  }, [count]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update count
        </button>
      </div>
    </>
  );
};

export default App;
