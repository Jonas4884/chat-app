import { Channel, User, chatMessage } from "@/common/types"
import { channelProvider } from "@/providers"
import { useEffect, useState } from "react"
import { filter } from "./utils/filter"
import { DropdownArea } from "./DropDownBar"
import { useGlobalStore } from "@/userContext"
import { userProvider } from "@/providers/user-provider"
import useSWR from "swr"
type SideBarProps = {
    status : string
}
export const SideBar =({status} : SideBarProps)=>{

   
    const [userChat,setUserChat]= useState<User[]>()
    const [channelData,setChannelData] = useState<Channel[]>([])
    const user  =useGlobalStore();
    const {
        isLoading,
        data: users = [],
        error: fetchUserError,
      } = useSWR("/users", () => userProvider.getUsers());
    useEffect(()=>{
        const getAllChannel = ()=>{
        channelProvider.getAllChannel().then((response)=>{
                setChannelData(response.data.channels)
            })
        }
        getAllChannel()
    },[])

        return(
            <>
                
                <DropdownArea type="public" redirect="channel" data={filter.getPublicChannel(channelData)} status={status}/>
                <DropdownArea type="private" redirect="channel" data={filter.getPrivateChannel(channelData) } status={status}/>
                <DropdownArea type="message" redirect="message" data={users as User[]} status={status}/>
    
            </>
        )
    
   
}