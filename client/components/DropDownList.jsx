import React, { Component } from "react";
import {
    Tab,
    Row,
    Col,
    Nav,
    NavItem,
    FieldGroup,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    For
} from "react-bootstrap";

class DropDownList extends Component {

  render() {
    var inform = window.inform;
    console.log(inform);
      return(
        <FormGroup controlId="formControlsSelect" sm={8}>
        <Col componentClass={ControlLabel} sm={2}>
          Тип работы
          </Col>
          <Col sm={10}>
          <FormControl id="idwork"  componentClass="select" placeholder="select">
          ({inform.worksinfo.map(item => <option key={item.idtypes_of_work} value={item.idtypes_of_work}>{item.jobtitle}</option>)})
         </FormControl>
         </Col>
        </FormGroup>
      )
    }
}

export default DropDownList;