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
import { win32 } from "path";

class AddRequestForService extends Component {

  render() {
   var addRequest =  function () {
      //Функция для вызова с регистрации которая отправляет данные на Back-end о сервисе
      console.log("Пытаемся добавить предложение!");
      var params = new URLSearchParams();
      params.append("idrequests", window.idrequest);
      params.append("idservice", window.idclient );
      params.append("price", document.getElementById("price").value  );
      params.append("description", document.getElementById("description").value  );
      axios
        .post("/offeraservice", params)
        .then(function(response) {
          if (response.data == "OK") {
            console.log("Успешно добавили предложение от сервиса!");
            window.gomain();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    return (
        <Form horizontal>

   

    <FormGroup controlId="formHorizontalDescription">
      <Col componentClass={ControlLabel} sm={2}>
        Описание
      </Col>
      <Col sm={10}>
        <FormControl id="description" type="text" placeholder="Описание" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Цена
      </Col>
      <Col sm={10}>
        <FormControl id="price" type="text" placeholder="Цена" />
      </Col>
    </FormGroup>


    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={addRequest} >
          Ок
        </Button>
      </Col>
    </FormGroup>
  </Form>
    )
    }
}

export default AddRequestForService;