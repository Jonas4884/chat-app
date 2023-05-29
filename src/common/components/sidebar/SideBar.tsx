import { Channel } from "@/common/types"
import { channelProvider } from "@/providers"
import { useEffect, useState } from "react"
import { filter } from "./utils/filter"
import { DropdownArea } from "./DropDownBar"

export const SideBar =()=>{
    const [publicChannel,setPublicChannel]=useState<Channel[]>()
    const [privateChannel,setPrivateChannel]=useState<Channel[]>()
    useEffect(()=>{
        const getAllChannel = ()=>{
            channelProvider.getAllChannel().then((response)=>{
                setPublicChannel(response.data.channels);
                setPrivateChannel(response.data.channels);
            });
           getAllChannel()
        } 
       

    }),[publicChannel,privateChannel]
   
        return(
            <>
                
                <DropdownArea type="public" data={publicChannel}/>
                <DropdownArea type="private" data={privateChannel}/>
    
                
            </>
        )
    
   
}