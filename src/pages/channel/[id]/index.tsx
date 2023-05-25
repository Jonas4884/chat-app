'use client';
import { ChatBox, CreateChannel, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";

import { Channel,RestChannel, RestChatMessage } from "@/common/types";
import { getSavedCred } from "@/common/utils";
import { MessageProvider, channelProvider } from "@/providers";
import { log } from "console";
import { GetServerSideProps, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import {useParams} from 'next/navigation'
import { useRouter } from "next/router";

type ChatRoomWithIdProps ={
    channelList : RestChannel[],
    resMessage: RestChatMessage[],
    value : RestChannel
}
const ChatRoomWihId = ({value,channelList,resMessage}: ChatRoomWithIdProps) => {
  const [data,setData] = useState();
  const [message,setMessage]= useState();
  const router = useRouter()

  useEffect(()=>{
    const getData = () => {
      channelProvider.getAllChannel().then((response)=>{
          setData(response.data.channels)
      });      
    }
    const getDataById = ()=>{
      MessageProvider.getMessageByChannelId(Number(router.query.id)).then((res)=>{        
        setMessage(res.data.messages)
      })
    }
     getData(); 
     getDataById()
  },[message])
  return (
    <Layout>
      <AppBar name="john" />
        <MainLayout LeftPanel={<ChannelListContainer data={data}/>}  RightPanel={<ChannelInfo/>} MainPanel={<ChatBox data={message}/>}/>
    </Layout>
  )
}
 
export default ChatRoomWihId;