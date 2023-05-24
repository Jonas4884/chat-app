import { ChatBox, CreateChannel, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { Channel,RestChannel } from "@/common/types";
import { getSavedCred } from "@/common/utils";
import { channelProvider } from "@/providers";
import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";


type RestChannelProps = {
  value : RestChannel[]
}
const ChatRoom = () => {
  const [data,setData] = useState();
  useEffect(()=>{
    const getData =async () => {
      const res = await channelProvider.getAllChannel();
     setData(res.data.channels)
    }
    getData()
  },[data])
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout data={data} LeftPanel={<ChannelListContainer data={data}/>} RightPanel={<ChannelInfo/>} MainPanel={<ChatBox/>}/>
    </Layout>
  )
}

export default ChatRoom;