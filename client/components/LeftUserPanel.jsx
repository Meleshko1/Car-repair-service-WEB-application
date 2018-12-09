import React, { Component } from "react";
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import ShowAllRequestUser from "./ShowAllRequestUser.jsx";
import AddRequestForUserTab from "./AddRequestForUserTab.jsx";
import axios from "axios";

class LeftUserPanel extends Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">Добавить заявку</NavItem>
              <NavItem eventKey="second" onClick={window.main()}>
                Просмотреть свои заявки
              </NavItem>
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
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default LeftUserPanel;
