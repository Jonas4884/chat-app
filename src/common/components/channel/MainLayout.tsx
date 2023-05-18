import {ElementType, PropsWithChildren, ReactElement, ReactNode} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ChannelListContainer } from "./ChannelList";
import { ChatBox } from "../chat";


export type MainLayoutProps = PropsWithChildren< {
  MainPanel: ReactNode;
  LeftPanel?: ReactNode;
  RightPanel?: ReactNode;
}>;

export const MainLayout = ({MainPanel,LeftPanel,RightPanel}: MainLayoutProps) => {


  return (
    <Container>
      <Row>
      <Col> <ChannelListContainer />
          
        </Col>
        <Col  xs={6}>
            <ChatBox/>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
