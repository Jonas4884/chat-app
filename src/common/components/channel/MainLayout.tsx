import {ElementType, PropsWithChildren, ReactElement, ReactNode} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ChannelListContainer } from "./ChannelList";
import { ChatBox } from "../chat";
import { ChannelInfo } from "../banner";
import { RestChannel } from "@/common/types";
import { GetServerSideProps } from "next";
import { channelProvider } from "@/providers";


export type MainLayoutProps = PropsWithChildren< {
  MainPanel: ReactNode;
  LeftPanel?: ReactNode;
  RightPanel?: ReactNode;
}>;

export const MainLayout = ({MainPanel,LeftPanel,RightPanel}: MainLayoutProps) => {
  return (
    <Container>
      <Row>
      <Col> {
          LeftPanel
      }
       
          
        </Col>
        <Col  xs={6}>
            {
              MainPanel
            }
        </Col>
        <Col >
          {RightPanel}
        </Col>
      </Row>
    </Container>
  );
};

