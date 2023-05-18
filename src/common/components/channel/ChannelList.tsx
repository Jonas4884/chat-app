import { NewChannel, UserforDomain } from "@/common/types";
import { PropsWithChildren } from "react";
import { customChannelTeamFilter } from "./utils/channel-filter";

import { ChannelBox } from "./ChannelBox";
import { TeamChannelList } from "./TeamChannelList";
import { CreateChannel } from "./CreateChannel";

const ChannelDefault: NewChannel[]=

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
  ]
export const ChannelListContainer = () => {
    //const publicChannel = customChannelTeamFilter(channels)

    return (

        <div className="channel-list__list__wrapper">
            <CreateChannel/>
            <>
                {
                    ChannelDefault.map((key,item) => { 
                      <TeamChannelList id={key.id} type={key.type} name={key.name} owner={key.owner} ownerId={key.ownerId}/>
                    })
                }

            </>

        </div>

    )
}