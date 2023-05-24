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
 
export default ChatRoomWihId;