import { Channel } from "@/common/types"

type ChannelList = {
    data : Channel[]
}

export  const filter = {
    getPublicChannel : ({data}:ChannelList)=>{    
        return data.filter((x)=>x.type=='public')
     },
     getPrivateChannel : ({data}:ChannelList)=>{    
         return data.filter((x)=>x.type=='private')
      }
 }