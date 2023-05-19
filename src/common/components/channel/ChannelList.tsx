import { Channel, RestChannel, UserforDomain } from "@/common/types";
import { PropsWithChildren } from "react";
import { customChannelDirectFilter, customChannelTeamFilter } from "./utils/channel-filter";

import { ChannelBox } from "./ChannelBox";
import { TeamChannelList } from "./TeamChannelList";
import { CreateChannel } from "./CreateChannel";
import { GetServerSideProps } from "next";
import { channelProvider } from "@/providers";

type RestChannelType = {
  data: RestChannel[]
}

export const ChannelListContainer = ({ data }: RestChannelType) => {

  return (

    <div className="channel-list__list__wrapper">
      <CreateChannel />
      <>
        {
          data.map((key) => {
            return (<TeamChannelList key={key.id} item={key} />
            )
          })
        }

      </>

      <>

      </>
    </div>
  )
}
