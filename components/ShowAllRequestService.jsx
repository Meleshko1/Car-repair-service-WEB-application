import React, { Component } from "react";
import { Tab, Row, Col, Nav, Table, Button } from "react-bootstrap";

class ShowAllRequestService extends Component {
  render() {
    function addOffer(e) {//Функция для удаления заявки клиента
      window.idrequest = e.currentTarget.id;
      window.goadd();
    }
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID Запроса</th>
            <th>Тип работы</th>
            <th>Описание работы</th>
            <th>Автомобиль</th>
            <th>Срочность</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {window.requests2.map(item => (
            <tr id={item}>
            <td>{item.idrequests}</td>
            <td>{item.jobtitle}</td>
            <td>{item.description_of_work}</td>
            <td>{item.carname}</td>
            <td>{item.urgency}</td>
            <td> <Col smOffset={2} sm={10}>
        <Button id={item.idrequests} onClick={addOffer}>
          Предложить свои услуги
        </Button>
          </Col></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default ShowAllRequestService;
