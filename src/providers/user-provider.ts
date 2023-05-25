import { userRequest } from "./utils"

export const userProvider = {
    getUsers : async ()=>{
        await userRequest().get("/user")
    }
}