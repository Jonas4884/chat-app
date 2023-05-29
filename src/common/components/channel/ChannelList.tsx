import { Channel, RestChannel, UserforDomain } from "@/common/types";
import { TeamChannelList } from "./TeamChannelList";

import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { SideBar } from "../sidebar/SideBar";

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
        <SideBar/>

      </>

      <>

      </>
    </div>
  )
}
