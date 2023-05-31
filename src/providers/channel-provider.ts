import { Channel,  ChannelforDomain,  RestChannel } from "@/common/types";
import { userRequest } from "./utils";

export const channelProvider = {
    getAllChannel : async() => (await userRequest().get("/channels")),
    getChannelById : async(id: number)=> userRequest().get(`/channel/${id}`),
    addMembertoChannel : async(member: any,id: number) =>{
        try{
             const data = userRequest().post(`/channels/${id}/members`,member)
                return {data}
        }catch (error){
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
    },
    createNewChannel:async (channel : ChannelforDomain) => {
        try{
            const data = userRequest().post(`/channel`,channel)
            return data
        }catch(error){
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
        }
    }
}