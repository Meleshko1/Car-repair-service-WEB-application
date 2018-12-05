var path = require('path'); //Для доступа к файловой системе (установка статик роута)
var bodyParser = require('body-parser'); //Для парсинга тела запросов на API
var express = require('express'); //сервер
var app = express(); //Сервер obj
var mysql = require('mysql'); //MySQL либа для связи с БД
//Настраиваем соединение (нужно вынести в отдельный файл) Amazon
//var connection = mysql.createConnection({
//    host: *****,
//    user: '****',
//    password: '*****',
//    database: ****
//});
//Настраиваем соединение (нужно вынести в отдельный файл) Local
var connection = mysql.createConnection({
    host: '*****',
    user: '****',
    password: '**',
    database: '*'
});
connection.connect(); //Подключение к БД MySQL
var port = 80; //Порт на котором будет работать сервер (стандартный для http - 80)
//Body Parser настройки
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));//Статика на директорию с файлами
//Проводим авторизацию пользователя в ответ на логин и пароль отдаём id пользователя и тип аккаунта
app.post('/autorithation', function (req, res) {
    var accountinfo = {
        login: req.body.login,
        password: req.body.password
    };
   connection.query("SELECT сlients.login, сlients.password, сlients.idсlient  FROM сlients WHERE сlients.login='"+accountinfo.login+"' AND сlients.password='"+accountinfo.password+"'"
    , function (error, results, fields) {
        if (error) throw error;
        if(results.length>0)
        {  
            res.send({
                idclient : results[0].idсlient,
                accounttype: "client"
            });
        }
        else
        connection.query("SELECT services.login, services.password,services.idservice  FROM services WHERE services.login='"+accountinfo.login+"' AND services.password='"+accountinfo.password+"'"
        , function (error, results, fields) {
            if (error) throw error;
            if(results.length>0)
            {   
                res.send({
                    idclient : results[0].idservice
                });
            }
            else
            res.send("Nope"); 
        });
       
    });
});
//Получаем данные о регистрации клиента (и машине) и заносим в бд
app.post('/registationclient', function (req, res) {
    var userinfo = {
        login: req.body.login,
        password: req.body.password,
        car: req.body.car,
        fio: req.body.fio,
        phone_number: req.body.phone_number,
        address: req.body.address,
        email: req.body.email
    };
   var idRecord ; 
   //Добавим клиента в БД
   var rezult = connection.query("INSERT INTO сlients (login,password,fio,phone_number,address,email) VALUES ('"+userinfo.login+"','"
+userinfo.password+"','"+userinfo.fio+"','"+userinfo.phone_number+"','"+userinfo.address+"','"+userinfo.email+"')"
    , function (error, results, fields) {
        if (error) throw error;
        console.log("User Reg "+userinfo.login);
        idRecord = results.insertId; //ID добавленной записи
    //Добавим авто клиента в бд
    connection.query("INSERT INTO cars (carname,idclient) VALUES ('"+userinfo.car+"','"+idRecord+"')"
    , function (error, results, fields) {
        if (error) throw error;
        console.log("Car add "+userinfo.car);
        idRecord = results.insertId;
        res.send("OK");
    });
    });   
});
//Получаем данные о регистрации сервиса и заносим в бд
app.post('/registationservice', function (req, res) {
    var serviceinfo = {
        login: req.body.login,
        password: req.body.password,
        description: req.body.description,
        fio: req.body.fio,
        servicename: req.body.servicename,
        phone_number: req.body.phone_number,
        address: req.body.address,
        email: req.body.email
    };
    var rezult = connection.query("INSERT INTO services (login,password,fio,phone_number,address,email,description,servicename) VALUES ('"+serviceinfo.login+"','"
+serviceinfo.password+"','"+serviceinfo.fio+"','"+serviceinfo.phone_number+"','"+serviceinfo.address+"','"+serviceinfo.email+"','"+serviceinfo.description+"','"+serviceinfo.servicename+"')"
    , function (error, results, fields) {
        if (error) throw error;
        console.log("Service reg "+serviceinfo.login);
        res.send("OK");
    });  
});
//Получаем данные о заявке и заносим в БД
app.post('/addrequest', function (req, res) {
    var requestinfo = {
        idauto: req.body.idauto,
        idwork: req.body.idwork,
        description_of_work: req.body.description_of_work,
        urgency: req.body.urgency
    };
   var rezult = connection.query("INSERT INTO requests (idauto,idwork,description_of_work,urgency) VALUES ('"+requestinfo.idauto+"','"+requestinfo.idwork+"','"+requestinfo.description_of_work+"','"+requestinfo.urgency+"')"
    , function (error, results, fields) {
        if (error) throw error;
        res.send("OK");
        console.log("Request ADD "+requestinfo.idwork);
    });
});
//Отдаём все заявки с данным ID пользователя
app.get('/getrequests', function (req, res) {
    var requestinfo = {
        idclient: req.headers.idclient
    };
   var rezult = connection.query("SELECT requests.idrequests, requests.idwork, types_of_work.jobtitle, requests.description_of_work, requests.urgency,cars.carname FROM requests JOIN cars ON requests.idauto = cars.idcar JOIN сlients  ON cars.idclient = сlients.idсlient JOIN types_of_work ON requests.idwork = types_of_work.idtypes_of_work  WHERE сlients.idсlient="+requestinfo.idclient
    , function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        console.log(results);
    });
});
//Отдаём все предложения выполнения для заявки с заданы ID
app.get('/getresponseforrequest', function (req, res) {
    var requestinfo = {
        idreques: req.headers.idreques
    };
   var rezult = connection.query("SELECT * FROM accepted_requests JOIN requests ON accepted_requests.idrequests = requests.idrequests WHERE  accepted_requests.idrequests="+requestinfo.idreques
    , function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        console.log(results);
    });
})
//Отдаём инфу о сервисе с заданными ID
app.get('/getinfoaboutservice', function (req, res) {
    var idserviceinfo = {
        idservice: req.headers.idservice
    };
   var rezult = connection.query("SELECT * FROM services WHERE services.idservice="+idserviceinfo.idservice
    , function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        console.log(results);
    });
});
//Отдаём все запросы на ремонт
app.get('/getallrequests', function (req, res) {
   var rezult = connection.query("SELECT requests.idrequests, types_of_work.jobtitle,cars.carname,requests.description_of_work,requests.urgency  FROM requests JOIN cars ON requests.idauto = cars.idcar JOIN types_of_work ON requests.idwork = types_of_work.idtypes_of_work "
    , function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        console.log(results);
    });
});
//Ставим значение предложенной улуги на заявку в true
app.post('/acceptservice', function (req, res) {
    var requestinfo = {
        idrequests: req.body.idrequests,
        idservice: req.body.idservice
    };
    var rezult = connection.query("UPDATE accepted_requests SET accepted_requests.status='true' WHERE idrequests='"+requestinfo.idrequests+"' AND idservice='"+requestinfo.idservice+"'"
    , function (error, results, fields) {
        if (error) throw error;
        else
        {
            res.send("OK");
            console.log("Service Request confirm "+requestinfo.idrequests);
        }
    });
});
//Отменяем (удаляем) заявку автовладельца с заданным ID
app.post('/cancelrequest', function (req, res) {
    var requestinfo = {
         idrequest: req.body.idrequest
    };
 connection.query("DELETE FROM requests WHERE idrequests='"+requestinfo.idrequest+"'"
    , function (error, results, fields) {
        if (error) throw error;
        else
        {
            res.send("OK");
            console.log("Request dell ID "+requestinfo.idrequest);
        }
    });
});
//Добавляем предложение сервиса для заявки с указанным ID
app.post('/offeraservice', function (req, res) {
    var offerinfo = {
        idrequests: req.body.idrequests,
        idservice: req.body.idservice,
        price: req.body.price,
        description: req.body.description
    };
    var rezult = connection.query("INSERT INTO accepted_requests (idrequests, price, description, idservice, status) VALUES ('"+offerinfo.idrequests+"','"+offerinfo.price+"','"+offerinfo.description+"','"+offerinfo.idservice+"','false')"
    , function (error, results, fields) {
        if (error) throw error;
        else
        {
            res.send("OK");
            console.log("Service Request confirm "+offerinfo);
        }
    });
});
//Отдаём всё что нужно клиенту для заполнения формы подачи заявки
app.get('/getallinfo', function (req, res) {
    var sendInfo = {
        auto: "",
        worksinfo : ""
    }
    connection.query("SELECT * FROM types_of_work "
     , function (error, results, fields) {
         if (error) throw error;
         sendInfo.worksinfo = results;
         console.log(results);
     });
     var userid = req.headers.idclient;
     connection.query("SELECT * FROM cars JOIN сlients ON cars.idclient = сlients.idсlient WHERE  сlients.idсlient="+userid
     , function (error, results, fields) {
         if (error) throw error;
         sendInfo.auto = results;
         res.send(sendInfo);
         console.log(results);
     });
 });
app.use(function(req, res, next) {
    res.status(404).send('Такой страницы не существует...');
  });
//Запускаем сервер
app.listen(port, function () {
    console.log('Server worked on port: ' + port);
});
