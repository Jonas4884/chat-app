import { ChatUser } from "./user"

export interface chatMessage {
   senderId ?: number,
    recepientId?: number,
    channelId?: number,
    content: string
}
export interface RestChatMessage extends chatMessage{
    id : number ,
    createedAt? : string,
    updateAt? : string,
    sender ?: ChatUser
}