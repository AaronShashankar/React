import React from "react";
import { number, object, string } from "yup";

const Yup = () => {


    
  // validation only
  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactFormSchema = object({
      email: string().required().email(),
      password: string().required().min(8).max(16),
      address: string().required().min(6),
      contact: number().positive().required(),
    });

    const inputData = {
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };

    const isValid = await contactFormSchema.isValid(inputData);
    console.log(isValid);
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

export default Yup;
