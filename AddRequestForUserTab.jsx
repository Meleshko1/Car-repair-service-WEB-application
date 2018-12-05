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
import DropDownList from "./DropDownList.jsx";
class AddRequestForUserTab extends Component {
  render() {
   var addRequest =  function () {
      //Функция для вызова с регистрации которая отправляет данные на Back-end о сервисе
      console.log("Пытаемся добавить зявку!");
      var params = new URLSearchParams();
      params.append("idauto", window.inform.auto[0].idcar);
      params.append("idwork", document.getElementById("idwork").value );
      params.append("description_of_work", document.getElementById("description_of_work").value  );
      params.append("urgency", document.getElementById("urgency").value  );
      axios
        .post("/addrequest", params)
        .then(function(response) {
          if (response.data == "OK") {
            console.log("Успешно добавили запрос от пользователя!");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    return (
        <Form horizontal>
     <DropDownList />
    <FormGroup controlId="formHorizontalDescription">
      <Col componentClass={ControlLabel} sm={2}>
        Подробности работы котрую необходимо выполнить
      </Col>
      <Col sm={10}>
        <FormControl id="description_of_work" type="text" placeholder="Подробности" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Срочность выполнения работы
      </Col>
      <Col sm={10}>
        <FormControl id="urgency" type="text" placeholder="Срочность" />
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
export default AddRequestForUserTab;
