import { userRequest } from "./utils"

export const userProvider = {
    getUsers : async ()=>{

        try {
           const res = await userRequest().get("/users")
            return res.data.user
        } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
       
    }
}