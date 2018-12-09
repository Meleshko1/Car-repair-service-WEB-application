import React, { Component } from "react";

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




class LoginPage extends Component {
  
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title >Регистрация</Modal.Title>
          </Modal.Header>

          <Modal.Body>

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Автовладелец">
          <Form horizontal >

              <FormGroup controlId="formHorizontal" >
                <Col componentClass={ControlLabel} sm={2}>
                  Логин
                </Col>
                <Col sm={10}>
                  <FormControl id="login" type="login" placeholder="Логин" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Пароль
                </Col>
                <Col sm={10}>
                  <FormControl id="password" type="password" placeholder="Пароль" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Автомобиль
                </Col>
                <Col sm={10}>
                  <FormControl id="car" placeholder="Автомобиль" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  ФИО
                </Col>
                <Col sm={10}>
                  <FormControl id="fio" placeholder="ФИО" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Номер телефона
                </Col>
                <Col sm={10}>
                  <FormControl id="phone_number" placeholder="Номер телефона" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Адрес
                </Col>
                <Col sm={10}>
                  <FormControl id="address" placeholder="Адрес" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl id="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button id="regclientBtn" onClick={this.props.sendRegClient} >Зарегестрироваться</Button>
                </Col>
              </FormGroup>
            </Form>
          </Tab>
          <Tab eventKey={2} title="Владелец сервиса">
          <Form horizontal >

              <FormGroup controlId="formHorizontal" >
                <Col componentClass={ControlLabel} sm={2}>
                  Логин
                </Col>
                <Col sm={10}>
                  <FormControl id="login2" type="login" placeholder="Логин" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Пароль
                </Col>
                <Col sm={10}>
                  <FormControl id="password2" type="password" placeholder="Пароль" />
                </Col>
              </FormGroup>

           

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  ФИО
                </Col>
                <Col sm={10}>
                  <FormControl id="fio2" placeholder="ФИО" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Номер телефона
                </Col>
                <Col sm={10}>
                  <FormControl id="phone_number2" placeholder="Номер телефона" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Адрес
                </Col>
                <Col sm={10}>
                  <FormControl id="address2" placeholder="Адрес" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl id="email2" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Название сервиса
                </Col>
                <Col sm={10}>
                  <FormControl id="servicename2" placeholder="Название" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Описание сервиса
                </Col>
                <Col sm={10}>
                  <FormControl id="description2" placeholder="Описание" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button id="regserviceBtn" onClick={this.props.sendRegService} >Зарегестрироваться</Button>
                </Col>
              </FormGroup>
            </Form>
          </Tab>
          </Tabs>

           
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.renderLoginPage}>Уже есть аккаунт??</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default LoginPage;
