import { UserforDomain } from "./user"

export interface Channel  {
    id : number,
    name?: string,
    type: string,
    createdAt?: string,
    updatedAt?: string,
    ownerId: number
}

export interface NewChannel extends Channel{
    owner : UserforDomain
}