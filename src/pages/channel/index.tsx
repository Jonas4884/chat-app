import { ChatBox, Layout, MainLayout} from "@/common/components";
import { ChannelInfo } from "@/common/components/banner";

import AppBar from "@/common/components/channel/AppBar";
import { ChannelListContainer } from "@/common/components/channel/ChannelList";
import { MainChannel } from "@/common/components/channel/MainChanne";

import { channelProvider } from "@/providers";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


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
    <Container className="main__layout mx-0">
      <Row>
      <Col> 
      <ChannelListContainer status="channel"/>
        </Col>
        <Col >
        <MainChannel/>
        </Col>
        
      </Row>
    </Container>
    </Layout>
    </>
  
  )
}

export default ChatRoom;