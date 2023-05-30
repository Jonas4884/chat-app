import { Channel, chatMessage } from "@/common/types"
import { channelProvider } from "@/providers"
import { useEffect, useState } from "react"
import { filter } from "./utils/filter"
import { DropdownArea } from "./DropDownBar"
type SideBarProps = {
    status : string
}
export const SideBar =({status} : SideBarProps)=>{
    const [publicChannel,setPublicChannel]=useState<Channel[]>()
    const [privateChannel,setPrivateChannel]=useState<Channel[]>()
    const [data,setData]=useState();
    const [message,setMessage] = useState<chatMessage>()
    useEffect(()=>{
        const getAllChannel = ()=>{
           channelProvider.getAllChannel().then((response)=>{
                setPublicChannel(response.data.channels);
                setPrivateChannel(response.data.channels);
                setData(response.data.channels)  
                 
            });
            //TODO: get user Id by Zustand
          
        } 
        getAllChannel()
    },[data])
   
        return(
            <>
                
                <DropdownArea type="public" data={data} status={status}/>
                <DropdownArea type="private" data={data} status={status}/>
                <DropdownArea type="message" data={data} status={status}/>
    
            </>
        )
    
   
}