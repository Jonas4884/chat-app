import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export const signUpSchema = yup.object().shape({
  name : yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "this password doesn't match"),

});
export const chatSchema = yup.object().shape({
  content: yup.string().required("cannot send empty messsage"),
});