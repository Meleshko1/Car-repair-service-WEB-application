import React, { Component } from "react";
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import ShowAllRequestUser from "./ShowAllRequestUser.jsx";
import AddRequestForUserTab from "./AddRequestForUserTab.jsx";
import axios from "axios";
class LeftUserPanelOffer extends Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="thirt">
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first" onClick={window.main()}>Добавить заявку</NavItem >
              <NavItem eventKey="second" onClick={window.main()}>Просмотреть свои заявки</NavItem>
              <NavItem eventKey="thirt" >Просмотр предложений</NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                <AddRequestForUserTab />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ShowAllRequestUser />
              </Tab.Pane>
              <Tab.Pane eventKey="thirt">
                <ShowAllRequestUser />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
export default LeftUserPanelOffer;

