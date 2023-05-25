import { ChatUser } from "./user"

export interface chatMessage {
    senderid ?: number,
    recepientid?: number,
    channelid?: number,
    content: string
}
export interface RestChatMessage extends chatMessage{
    id : number ,
    createedAt? : string,
    updateAt? : string,
    sender ?: ChatUser
}