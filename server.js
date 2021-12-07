// 서버를 띄우기 위한 기본 setting (express 라이브러리)
const express = require('express');
const app = express();
var mysql = require('mysql');
var template = require('./pages/template.js');
var bodyParser = require('body-parser');

// 미들웨어 실행
app.use(bodyParser.urlencoded({extended: false}))

var DataBase = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'go030203',
    database:'list',
    port:'3307',
    dateStrings: 'date'
});

DataBase.connect();

// 2020 포트에 서버 띄우기 확인 code
app.listen(3307, function(){
    console.log('listening on 3307')
});

// 메인 홈페이지
app.get('/index', function(req, res){
    res.sendFile(__dirname + '/pages/index.html');
});

// 오늘의 추천
app.get('/recommend', function(req, res){
    res.sendFile(__dirname + '/pages/recommend.html');
});

// 게시판
app.get('/board', function(req, res){
    DataBase.query(`SELECT * FROM board`, function(error, board) {
        if (error) {
            throw error;
        }
        var list = template.list(board);
        var html = template.HTML(list);

        res.send(html);
    });
});

//게시판에 글 생성
app.get('/create', function(req, res){
    res.sendFile(__dirname + '/pages/create.html');
});

// 작성된 글 처리
app.post('/create_process', function(req, res) {
    DataBase.query("INSERT INTO board (user, title, description, created) VALUES(?, ?, ?, NOW())", [req.body.user, req.body.title, req.body.description], function(error, result){
        if (error) {
            throw error;
        }

        res.writeHead(302, {Location: '/board'});
        res.end();
    });
});

// top
app.get('/top', function(req, res){
    res.sendFile(__dirname + '/pages/top.html');
});

// 이미지 띄우기
app.use(express.static('images'));
