import { Channel, chatMessage } from "@/common/types"
import { channelProvider } from "@/providers"
import { useEffect, useState } from "react"
import { filter } from "./utils/filter"
import { DropdownArea } from "./DropDownBar"
import { useGlobalStore } from "@/userContext"
type SideBarProps = {
    status : string
}
export const SideBar =({status} : SideBarProps)=>{

    const [data,setData]=useState<Channel[]>([]);
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
    },[data])

        return(
            <>
                
                <DropdownArea type="public" data={filter.getPublicChannel(data)} status={status}/>
                <DropdownArea type="private" data={filter.getPrivateChannel(data) } status={status}/>
                <DropdownArea type="message" data={data} status={status}/>
    
            </>
        )
    
   
}