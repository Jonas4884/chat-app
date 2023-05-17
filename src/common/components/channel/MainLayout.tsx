import {ElementType, PropsWithChildren, ReactElement} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ChannelListContainer } from "./ChannelList";

export type MainLayoutProps = PropsWithChildren< {
  MainPanel: ElementType;
  LeftPanel?: ReactElement;
  RightPanel?: ElementType;
}>;

export const MainLayout = ({MainPanel,LeftPanel,RightPanel}: MainLayoutProps) => {


  return (
    <Container>
      <Row>
      <Col>
          <ChannelListContainer/>
        </Col>
        <Col  xs={6}>
            Helllo
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
