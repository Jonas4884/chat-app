import { CreateUser, LoginUser, UserforDomain, UsertoREST } from "@/common/types";
import { userRequest } from "./utils";
import { cache, clearCredential } from "@/common/utils";

export const authProvider = {
    signUp : async ( user : CreateUser) => userRequest().post('/users',user),
    signIn: async( user : LoginUser) =>{
        try {
            const LoginUser: UsertoREST = (await userRequest().post('/users/login', user)).data.user;
            cache.accessToken(LoginUser?.token);   
            return {redirection: '/channel',data : LoginUser as UserforDomain,authenticate: true};
        } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {redirection : '/error',data,authenticate: false}
        }

    },
    signOut : async()=>{
        clearCredential.clearData()
    }
}