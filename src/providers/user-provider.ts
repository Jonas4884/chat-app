import { userRequest } from "./utils"

export const userProvider = {
    getUsers : async ()=>{

        try {
           const res = await userRequest().get("/user")
           
            return res.data.user
        } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
       
    }
}