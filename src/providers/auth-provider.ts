import { CreateUser, LoginUser, UserforDomain, UsertoREST } from "@/common/types";
import { userRequest } from "./utils";
import { cache, clearCredential } from "@/common/utils";

export const authProvider = {
    signUp : async ( user : CreateUser) => userRequest().post('/users',user),
    signIn: async( user : LoginUser) =>{
        try {
            const userToRest: UsertoREST = (await userRequest().post('/users/login', user)).data.user;
            cache.accessToken(userToRest?.token);   
            return {redirection: '/channel',data : userToRest as UserforDomain,authenticate: true};
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