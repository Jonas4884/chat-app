import { Channel, RestChannel, UserforDomain } from "@/common/types";
import { TeamChannelList } from "./TeamChannelList";

import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

type RestChannelType = {
  data: RestChannel[],
  id ?: number
}

export const ChannelListContainer = ({ data }: RestChannelType) => {
  const route = useRouter();

  const handleShow = () => route.push("/channel/create");
  return (

    <div className="channel-list__list__wrapper">
     <Button variant="primary" onClick={handleShow}>
        Add new Channel
      </Button>
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
