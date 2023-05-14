import { User, UserforDomain } from "./user"

export interface Channel  {
    content ?: string,
    type ?: string
}
export interface ChannelMember{
    name : UserforDomain[]
}