import React, { Component } from "react";
import LeftUserPanel from "../components/LeftUserPanel.jsx";
import LeftUserPanelOffer from "../components/LeftUserPanelOffer.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import {
  Modal,
  Button,
  FormGroup,
  Form,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Tab,
  Tabs
} from "react-bootstrap";

class Mainpageforclient extends Component {
  render() {
    if(this.props.showoffer)
    return(
      <div>
      <HeaderComponent />
      <LeftUserPanelOffer />;
    </div>
    )
    else
    return (
      <div>
        <HeaderComponent />
        <LeftUserPanel />;
      </div>
    );
  }
}

export default Mainpageforclient;
