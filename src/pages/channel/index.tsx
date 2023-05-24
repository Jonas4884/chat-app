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
    const getData = () => {
      channelProvider.getAllChannel().then((response)=>{
          setData(response.data.channels)
      });      
    }
     getData(); 
  },[data])
  return (
    <>
        <AppBar name="john" />
    <Layout>
      
        <MainLayout data={data} LeftPanel={<ChannelListContainer data={data}/>} RightPanel={<ChannelInfo/>} MainPanel={<ChatBox/>}/>
    </Layout>
    </>
  
  )
}

export default ChatRoom;