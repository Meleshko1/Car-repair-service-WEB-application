
import React, { Component } from "react";
import LeftUserPanel from "../components/LeftUserPanel.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import ShowAllRequestService from "../components/ShowAllRequestService.jsx"
import AddRequestForService from "../components/AddRequestForService.jsx"
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

class Mainpageforservice extends Component {
  render() {
    
    if(this.props.params)
    return(
      <div>
      <HeaderComponent />
      <AddRequestForService />
    </div>
    )
    else
    return(
        <div>
        <HeaderComponent />
        <ShowAllRequestService />
      </div>
    )
  }
}

export default Mainpageforservice;
