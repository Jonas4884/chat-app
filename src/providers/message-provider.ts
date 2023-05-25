import { chatMessage } from "@/common/types";
import { userRequest } from "./utils";
import { useRouter } from "next/router";


export const MessageProvider = {
    SendMessage : async(message : chatMessage)=>{

        userRequest().post("/message",message)
    },
    getMessageByChannelId :async (id:number) => {
       try {
        const message = await userRequest().get(`/messages/channel/${id}`)
        return message;
       } catch (error) {
        const {
            response : { status,data}
        } = error as any
        return  {status,data}
       }
    },
    getMessageByUserId : async (id: number)=> {
        try {
            const message = await userRequest().get(`/messages/${id}`)
            return message;
           } catch (error) {
            const {
                response : { status,data}
            } = error as any
            return  {status,data}
           }
    }
}