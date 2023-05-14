import { CreateUser, LoginUser } from "@/common/types";
import { userRequest } from "./utils";

export const authProvider = {
    signUp : async ( user : CreateUser) => userRequest().post('/users',user),
    signIn: async( user : LoginUser) =>{
        
    }
}