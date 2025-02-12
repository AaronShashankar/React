import React from "react";

const App = () => {
  const handleChange = () => {
    alert("someone just click me!!!!!");
  };

  const overMouse = () => {
    alert("someone just hover on me");
  };

  return (
    <div>
      <h1 className="font-extrabold text-3xl">Event Handaling </h1>
      <br />

      <div>
        <button onClick={handleChange} className="border-2 bg-cyan-900">
          click me{" "}
        </button>
        <br />
        
        <div
          className="border-2 w-[500px] h-[250px] m-auto"
          onMouseOver={overMouse}
        >
          <p>i am a text box</p>
        </div>
      </div>
     


    </div>
  );
};

export default App;
