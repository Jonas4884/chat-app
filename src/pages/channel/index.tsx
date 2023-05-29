import { ChatBox, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { channelProvider } from "@/providers";
import { useEffect, useState } from "react";


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