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
  ]
  type RestChannelType = {
    data : RestChannel[]
  }

export const ChannelListContainer = (id : number,{data}:RestChannelType) => {
    const publicChannel = customChannelTeamFilter(data)
    const privateChannel = customChannelDirectFilter(data)
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
export const getServerSideProps : GetServerSideProps<{data : RestChannelType}> =async (context) => {
  const data = await channelProvider.getChanelById(id as number)
    return{
      props : {data}
    }
}