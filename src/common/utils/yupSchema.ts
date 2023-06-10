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
export const profileSchema =  yup.object().shape({
  name : yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  newPassword: yup.string().required().notOneOf([yup.ref('password'), null], "new password cannot be the same as the old"),
  confirmPassword: yup.string().required().oneOf([yup.ref('newPassword'), null], "this password doesn't match"),
  
});

export const createChannelSchema = yup.object().shape({
  channelName: yup.string().required("cannot send empty channel name"),
});