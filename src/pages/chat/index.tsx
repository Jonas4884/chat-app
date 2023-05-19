import { ChatBox, CreateChannel, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { Channel,RestChannel } from "@/common/types";
import { channelProvider } from "@/providers";
import { GetServerSideProps, GetStaticProps } from "next";



 


type RestChannelProps = {
  value : RestChannel[]
}
const ChatRoom = ({value}: RestChannelProps) => {

 
  
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout data={value} LeftPanel={<ChannelListContainer data={value}/>} RightPanel={<ChannelInfo/>} MainPanel={<ChatBox/>}/>
    </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  const res = await channelProvider.getAllChannel() as any
  const value = res.data.channels;
 
  
  return { props: { value } };
}
export default ChatRoom;