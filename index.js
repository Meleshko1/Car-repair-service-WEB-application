import React from "react";
import LoginPage from "./containers/LoginPage.jsx";
import Mainpageforclient from "./containers/Mainpageforclient.jsx";
import Mainpageforservice from "./containers/Mainpageforservice.jsx";
import RegistrationPage from "./containers/RegistrationPage.jsx";
import { render } from "react-dom";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
//Функция для проверки куков userid, accountype, sessionkey
function getCookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );
  if (results) return unescape(results[2]);
  else return null;}
function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;
  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}
function sendRegClient() {
  //Функция для вызова с регистрации которая отправляет данные на Back-end о клиенте
  console.log("Пытаемся зарегать клиента!");
  var params = new URLSearchParams();
  params.append("login", document.getElementById("login").value);
  params.append("password", document.getElementById("password").value);
  params.append("car", document.getElementById("car").value);
  params.append("fio", document.getElementById("fio").value);
  params.append("phone_number", document.getElementById("phone_number").value);
  params.append("address", document.getElementById("address").value);
  params.append("email", document.getElementById("email").value);
  axios
    .post("/registationclient", params)
    .then(function(response) {
      if (response.data == "OK") {
        console.log("Успешно зарегали клиента!");
        renderLoginPage();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
function sendRegService() {
  //Функция для вызова с регистрации которая отправляет данные на Back-end о сервисе
  console.log("Пытаемся зарегать автосервис!");
  var params = new URLSearchParams();
  params.append("login", document.getElementById("login2").value);
  params.append("password", document.getElementById("password2").value);
  params.append("description", document.getElementById("description2").value);
  params.append("fio", document.getElementById("fio2").value);
  params.append("phone_number", document.getElementById("phone_number2").value);
  params.append("address", document.getElementById("address2").value);
  params.append("servicename", document.getElementById("servicename2").value);
  params.append("email", document.getElementById("email2").value);
  axios
    .post("/registationservice", params)
    .then(function(response) {
      if (response.data == "OK") {
        console.log("Успешно зарегали автосервис!");
        renderLoginPage();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
function autorithation() {
  //Функция для вызова с авторизации которая отправляет логин и пасс на Back-end
  console.log("Пытаемся авторизировать!");
  var params = new URLSearchParams();
  params.append("login", document.getElementById("login").value);
  params.append("password", document.getElementById("password").value);
  axios
    .post("/autorithation", params)
    .then(function(response) {
      if (response.data == "Nope") {
        console.log("Ошибка авторизации!");
      } else {
        console.log("Успешно Авторизован!");
        if (response.data.accounttype == "client") {
          console.log(
            "Это аккаунт автовладельца его ID " + response.data.idclient
          );
          setCookie("accountype", "client", "13/06/3000 00:00:00");
          setCookie("userid", response.data.idclient, "13/06/3000 00:00:00");
          //main();
        } else {
          console.log(
            "Это аккаунт автомастерской его ID " + response.data.idclient
          );
          setCookie("accountype", "service", "13/06/3000 00:00:00");
          setCookie("userid", response.data.idclient, "13/06/3000 00:00:00");
          //main();
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
function renderRegistration() {
  console.log("Рендерим страницу Регистрации!");
  render(
    <RegistrationPage
      renderLoginPage={renderLoginPage}
      sendRegClient={sendRegClient}
      sendRegService={sendRegService}
    />,
    document.getElementById("container")
  );}
function renderLoginPage() {
  console.log("Рендерим страницу Логина!");
  render(
    <LoginPage
      renderRegistration={renderRegistration}
      autorithation={autorithation}
    />,
    document.getElementById("container")
  );
}
function getAllInfoForAdd() { //Функция для получения информации необходимой для подачи заявки
  console.log("Пытаемся получить данные для заполнения заявки");
  axios
    .get("/getallinfo", {
      headers: { idclient: window.idclient }
    })
    .then(function(response) {
      console.log("Получили ответ от сервера со списком инфы!");
      console.log(response.data);
      window.inform = response.data;
      getAllRequests();
    })
    .catch(function(error) {
      console.log(error);
    });
}
function getAllRequests (){ //Функция для получения всех заявок клиента
  console.log("Пытаемся получить заявки клиента с ID = "+window.idclient);
  axios.get('/getrequests', {
    headers: {'idclient': window.idclient}
  })
  .then(function (response) {
    console.log("Получили ответ от сервера!");
    window.requests = response.data;
    rendermainpageForClient();
  })
  .catch(function (error) {
    console.log(error);
  });
  }
function rendermainpageForClient(showoffer) {
  console.log("Рендерим страницу клиента!");
  if(showoffer)
  render(
     <Mainpageforclient showoffer={true} />,
     document.getElementById("container")
   );
   else
  render(
    <Mainpageforclient showoffer={false} />,
    document.getElementById("container")
  );
}
function rendermainpageForService(params) {
  console.log("Рендерим страницу сервиса!");
  render(
    <Mainpageforservice params={params} />,
    document.getElementById("container")
  );
}
window.gomain = function getAllRequestsService(){
  console.log("Пытаемся получить все заявки от пользователей");
  axios.get('/getallrequests', {
    headers: {'idclient': window.idclient}
  })
  .then(function (response) {
    console.log("Получили ответ от сервера!");
    window.requests2 = response.data;
    rendermainpageForService();
  })
  .catch(function (error) {
    console.log(error);
  });
}
window.goadd = function RendeAddOffer(){
  console.log("Рендерим страницу добавления предложения для сервиса!");
  var add = true;
  render(
    <Mainpageforservice params={add} />,
    document.getElementById("container")
  );
}
window.main =  function main() {

  console.log("UserID = " + getCookie("userid"));
  if (getCookie("userid") != null) {
    window.idclient = getCookie("userid");
    var acctype = getCookie("accountype");
    if (acctype == "service") {
      //Если тип аккаунта сервис
     window.gomain();
    } else {
      //Если тип аккаунта автовладелец
      getAllInfoForAdd()
    }
  } else {
    //Если не авторизован
    renderLoginPage();
  }
};
//main();