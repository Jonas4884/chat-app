import { string } from "yup";
export const userSchema = Object({
    email : string().required("email is required"),
    password: string().required("password cannnot be null").min(8)
})