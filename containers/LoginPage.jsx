import React, { Component } from "react";
import {
  Modal,
  Button,
  FormGroup,
  Form,
  Col,
  ControlLabel,
  FormControl,
  Checkbox
} from "react-bootstrap";

class LoginPage extends Component {

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Авторизация</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
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

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Запомнить меня</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={this.props.autorithation} >Войти</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.renderRegistration} >Нет аккаунта?</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default LoginPage;
