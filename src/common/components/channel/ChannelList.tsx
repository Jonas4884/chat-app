import { Channel, RestChannel, UserforDomain } from "@/common/types";
import { PropsWithChildren } from "react";
import { customChannelDirectFilter, customChannelTeamFilter } from "./utils/channel-filter";

import { ChannelBox } from "./ChannelBox";
import { TeamChannelList } from "./TeamChannelList";
import { CreateChannel } from "./CreateChannel";
import { GetServerSideProps } from "next";
import { channelProvider } from "@/providers";

const ChannelDefault: RestChannel[]=

   [
    {
      id: 1,
      name: "channelName",
      type: "public",
      ownerId: 1,
      owner:{
        id: 1,
                name: "Elin Mask",
                email: "elin.mask@test.com"
      }
    }
    , {
      id: 2,
      name: "jkk",
      type: "private",
      createdAt: "2023-05-19T08:52:10.454Z",
      updatedAt: "2023-05-19T08:52:10.454Z",
      ownerId: 1,
      owner: {
          "id": 1,
          "name": "Elin Mask",
          "email": "elin.mask@test.com"
      }
    }
  ]
  type RestChannelType = {
    data : RestChannel[]
  }

export const ChannelListContainer = ({data}:RestChannelType) => {
   
    return (

        <div className="channel-list__list__wrapper">
            <CreateChannel/>
            <>
                {
                   ChannelDefault.map((key) => { 
                      return (<TeamChannelList key={key.id} item={key}/>
                      )
                    })
                }
                
            </>
         
            <>
            {
                  console.log(data)
                  
                }
            </>
        </div>
    )
}
