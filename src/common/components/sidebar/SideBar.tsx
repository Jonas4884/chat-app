import { Channel, User, chatMessage } from "@/common/types"
import { channelProvider } from "@/providers"
import { useEffect, useState } from "react"
import { filter } from "./utils/filter"
import { DropdownArea } from "./DropDownBar"
import { useGlobalStore } from "@/userContext"
import { userProvider } from "@/providers/user-provider"
type SideBarProps = {
    status : string
}
export const SideBar =({status} : SideBarProps)=>{

    const [data,setData]=useState<Channel[]>([]);
    const [userChat,setUserChat]= useState<User[]>()
    const [message,setMessage] = useState<chatMessage>()
    const user  =useGlobalStore();
    useEffect(()=>{
        const getAllChannel = ()=>{
           channelProvider.getAllChannel().then((response)=>{
                setData(response.data.channels)            
            });
            //TODO: get user Id by Zustand
        } 
        getAllChannel()
        const getAllUser = ()=>{
            userProvider.getUsers().then((response)=>{

                setUserChat(response)
            })
        }
        getAllUser()
    },[data])

        return(
            <>
                
                <DropdownArea type="public" redirect="channel" data={filter.getPublicChannel(data)} status={status}/>
                <DropdownArea type="private" redirect="channel" data={filter.getPrivateChannel(data) } status={status}/>
                <DropdownArea type="message" redirect="message" data={userChat} status={status}/>
    
            </>
        )
    
   
}