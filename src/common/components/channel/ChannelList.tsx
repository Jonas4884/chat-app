import { Channel, UserforDomain } from "@/common/types";
import { PropsWithChildren } from "react";
import { customChannelTeamFilter } from "./utils/channel-filter";

import { ChannelBox } from "./ChannelBox";
import { TeamChannelList } from "./TeamChannelList";
import { CreateChannel } from "./CreateChannel";

const ChannelDefault: Channel[]=

   [
    {
      id: 1,
      name: "channelName",
      type: "public",
      ownerId: 1,
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
                      <ChannelBox channel={key}/> 
                       
                    })
                }

            </>

        </div>

    )
}