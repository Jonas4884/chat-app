import { ChatBox, CreateChannel, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { Channel,RestChannel, RestChatMessage } from "@/common/types";
import { getSavedCred } from "@/common/utils";
import { MessageProvider, channelProvider } from "@/providers";
import { log } from "console";
import { GetServerSideProps, GetStaticProps } from "next";


type ChatRoomWithIdProps ={
    channelList : RestChannel[],
    resMessage: RestChatMessage[],
    value : RestChannel
}
const ChatRoomWihId = ({value,channelList,resMessage}: ChatRoomWithIdProps) => {

 
  
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout data={channelList}  LeftPanel={<ChannelListContainer data={channelList}/>} RightPanel={<ChannelInfo/>} MainPanel={<ChatBox data={resMessage}/>}/>
    </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {

  
   
    const {id} = context.query 
    if (typeof id === 'string' && getSavedCred.accessToken()) {
        const channelId = parseInt(id, 10); 
        const channel = await channelProvider.getAllChannel() as any
        const channelList = channel.data.channels // Get all Channel list
        const res = await channelProvider.getChanelById(channelId) as any; 
        const Message = await MessageProvider.getMessageByChannelId(channelId)
        const resMessage = Message.data.messages // Get all message by provided id
        const value = res.data.channel; // get channel info by provided id
               
        return { props: { channelList,value,resMessage } };
      }
      return { props: {} }; 
}   
export default ChatRoomWihId;