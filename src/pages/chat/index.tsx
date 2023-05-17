import { Layout, MainLayout } from "@/common/components";
import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";
import CreateChannel from "@/common/components/channel/CreateChannel";
import { Channel,NewChannel } from "@/common/types";
import { channelProvider } from "@/providers/channel-provider";
import { userRequest } from "@/providers/utils";
import { log } from "console";
import { GetServerSideProps } from "next";
import { useState } from "react";



const ChannelDefault: NewChannel[]=

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
 



const ChatRoom = (value: NewChannel[]) => {
  if (value.length == 0) {
    value = ChannelDefault
  }
 
 
  
  return (
    <Layout>
      <AppBar />
        <MainLayout LeftPanel={<ChannelListContainer/>} RightPanel={CreateChannel} MainPanel={ChannelListContainer}/>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await channelProvider.getAllChannel() as any
  const value = res.data.channels;
  return { props: { value } };
}
export default ChatRoom;