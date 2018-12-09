import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    PageHeader

} from "react-bootstrap";
//var navbar = {backgroundColor: '#3060ad'};
//style={navbar}
class HeaderComponent extends Component {
  render() {
    function deleteAllCookies() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      document.location.reload();
  }
    return (
    <div  > 
        <PageHeader  >Service Search<small> Lorem ipsum dolor sit amet</small></PageHeader>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header >
          <Navbar.Brand>
            <a href="#">Service Search</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} onClick={deleteAllCookies} href="*">Выйти</NavItem>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
    }
}

export default HeaderComponent;
