import { Channel, RestChannel, UserforDomain } from "@/common/types";
import { TeamChannelList } from "./TeamChannelList";

import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { SideBar } from "../sidebar/SideBar";

type RestChannelType = {
 status : string
}

export const ChannelListContainer = ({ status }: RestChannelType) => {
  const route = useRouter();

  const handleShow = () => route.push("/channel/create");
  return (

    <div className="channel-list__list__wrapper">
     <Button variant="primary" onClick={handleShow}>
        Add new Channel
      </Button>
      <>
        <SideBar status={status}/>

      </>

      <>

      </>
    </div>
  )
}
