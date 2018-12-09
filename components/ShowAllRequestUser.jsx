import React, { Component } from "react";
import axios from 'axios';
import {Tab, Row, Col, Nav, Table, Button } from "react-bootstrap";
class ShowAllRequestUser extends Component {
  render() {
    function deleteRequest(e) {//Функция для удаления заявки клиента
      console.log("Пытаемся удалить заявку номер ="+e.currentTarget.id);
      var params = new URLSearchParams();
      params.append("idrequest", e.currentTarget.id);
      axios.post("/cancelrequest", params)
        .then(function(response) {
          if (response.data == "OK") {
            console.log("Успешно удалили!");
            window.main();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Тип работы</th>
            <th>Описание работы</th>
            <th>Срочность</th>
            <th>Автомобиль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {window.requests.map(item => (
            <tr id={item}>
            <td>{item.jobtitle}</td>
            <td>{item.description_of_work}</td>
            <td>{item.urgency}</td>
            <td>{item.carname}</td>
            <td> <Col smOffset={2} sm={10}>
        <Button id={item.idrequests} onClick={deleteRequest}>
          Удалить
        </Button>
        <Button id={item.idrequests} >
          Просмотреть предложения
        </Button>
          </Col></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default ShowAllRequestUser;
