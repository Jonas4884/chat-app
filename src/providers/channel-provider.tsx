import { userRequest } from "./utils";

export const channelProvider = {
    getAllChannel : async() =>userRequest().get("/channels"),
    getChanelById : async(id: string)=> userRequest().get(`/channel?channel=${id}`),
}