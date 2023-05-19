import { CreateChannel, Layout, MainLayout} from "@/common/components";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { Channel,RestChannel } from "@/common/types";
import { channelProvider } from "@/providers";
import { GetServerSideProps } from "next";



const ChannelDefault: RestChannel[]=

   [
    {
      id: 1,
      name: "channelName",
      type: "private",
      ownerId: 1,
      owner:{
        name : "John",
        email:"Doe"
      }
    }
  ]
 



const ChatRoom = (value: RestChannel[]) => {

 
  
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout LeftPanel={<ChannelListContainer/>} RightPanel={<CreateChannel/>} MainPanel={<ChannelListContainer/>}/>
        
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await channelProvider.getAllChannel() as any
  const value = res.data.channels;
  return { props: { value } };
}
export default ChatRoom;