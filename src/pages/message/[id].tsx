'use client';
import { ChatBox, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { RestChannel, RestChatMessage } from "@/common/types";
import { MessageProvider } from "@/providers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type ChatRoomWithIdProps ={
    channelList : RestChannel[],
    resMessage: RestChatMessage[],
    value : RestChannel
}
const ChatMessageUser = ({value,channelList,resMessage}: ChatRoomWithIdProps) => {
  const [message,setMessage]= useState();
  const router = useRouter()

  useEffect(()=>{
   
    const getDataById = ()=>{
      MessageProvider.getMessageByUserId(Number(router.query.id)).then((res)=>{        
        setMessage(res.data.messages)
      })
    }
   
     getDataById()
  },[message])
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout LeftPanel={<ChannelListContainer status="message" />}  RightPanel={<ChannelInfo id={Number(router.query.id)} />} MainPanel={<ChatBox type="message" />}/>
    </Layout>
  )
}
 
export default ChatMessageUser;