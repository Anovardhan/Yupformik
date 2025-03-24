import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
    >
      <Form>
        <label>Name:</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <label>Confirm Password:</label>
        <Field type="password" name="confirmPassword" />
        <ErrorMessage name="confirmPassword" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default AdvancedForm;
