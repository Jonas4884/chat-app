import { User, UserforDomain } from "./user"

export interface Channel  {
    content ?: string,
    type ?: string
}
export interface ChannelMemberList{
    name : UserforDomain[]
}
export interface ChannelMember {
    name : UserforDomain
}
export interface NewChannel extends Channel{
    members : ChannelMemberList
}