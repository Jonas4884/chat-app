import { Channel } from "@/common/types"


export  const filter = {
    getPublicChannel : (data : Channel[])=>{    
        return data.filter((x)=>x.type=='public')
     },
     getPrivateChannel : (data:Channel[])=>{    
         return data.filter((x)=>x.type=='private')
      }
 }