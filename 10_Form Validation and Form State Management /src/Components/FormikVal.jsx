import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";

const FormikVal = () => {
  // useField -------------

  const userLoginSchema = object({
    email: string().email().required(),
    password: string().min(7).max(30).required(),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          console.log("form submitted");
        }}
        validationSchema={userLoginSchema}
      >
        {({ errors, handleChange, handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder={errors.email}
                onChange={handleChange}
              />{" "}
              <br />
              <input
                type="password"
                name="password"
                placeholder={errors.password}
                onChange={handleChange}
              />{" "}
              <br />
              <input type="submit" />
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikVal;
