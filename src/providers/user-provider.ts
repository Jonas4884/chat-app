import { User } from "@/common/types"
import { userRequest } from "./utils"

export const userProvider = {
    getUsers : async ()=>{
        try {
           const res = await userRequest().get("/users")
            return res.data.users
        } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }    
    },
    getUser : async ()=>{
        try {
           const res = await userRequest().get("/user")
            return res.data.user
        } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }    
    },
    updateUser :async (user:User) => {
        try {
          const res =  await userRequest().put("/user",user)
          return res.data.user;
        } catch (error) {
            console.log(error);

              const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
    }
}