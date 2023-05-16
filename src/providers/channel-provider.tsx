import { Channel,  NewChannel } from "@/common/types";
import { userRequest } from "./utils";

export const channelProvider = {
    getAllChannel : async() =>userRequest().get("/channels"),
    getChanelById : async(id: string)=> userRequest().get(`/channel?channel=${id}`),
    addMembertoChannel : async(member: NewChannel,id: string) =>{
        try{
             const data = userRequest().post(`channels?channelId=${id}/members`,member)
                return {data}
        }catch (error){
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
    },
    createNewChannel:async (channel : NewChannel) => {
        try{
            const data = userRequest().post(`channel`,channel)
            return data
        }catch(error){
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
    }
}