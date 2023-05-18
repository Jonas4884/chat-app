import { UserforDomain } from "./user"

export interface Channel  {
    id : number,
    name?: string,
    type: string,
    createdAt?: string,
    updatedAt?: string,
    ownerId: number
}

export interface RestChannel extends Channel{
    owner : UserforDomain
}
export interface ChannelforDomain {
    name ?: string,
    type?: string,
    members?: string
}
