import React, { Component } from "react";
import { Tab, Row, Col, Nav, Table, Button } from "react-bootstrap";

class ModalForServices extends Component {
  render() {
    function deleteRequest(e) {//Функция для удаления заявки клиента
      console.log("Пытаемся удалить заявку номер ="+e.currentTarget.id);

      var params = new URLSearchParams();
      params.append("idrequest", e.currentTarget.id);
      axios
        .post("/cancelrequest", params)
        .then(function(response) {
          if (response.data == "OK") {
            console.log("Успешно удалили!");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }


    return (
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default ModalForServices;
