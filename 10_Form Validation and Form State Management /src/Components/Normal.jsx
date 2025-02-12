import React from "react";

const Normal = () => {
  // // the normal behavbior of browser,
  // // when ever the form is submitted
  // // browser get reloaded
  //     const handleSubmit = (event)=>{
  // // so to prevent reloading we use
  //         event.preventDefault();
  //         // to get the value of input form
  //         console.log(event.target.value);
  //         console.log("form submitted");
  //     }

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputData = {
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };
    console.log(inputData);
    

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="text" name="address" />
        <br />
        <input type="number" name="contact" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Normal;
