// 서버를 띄우기 위한 기본 setting (express 라이브러리)
const express = require('express');
const app = express();

// 8080 포트에 서버 띄우기 확인 code
app.listen(8080, function(){
    console.log('listening on 8080')
});

// 메인 홈페이지
app.get('/index', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// 오늘의 추천
app.get('/recommend', function(req, res){
    res.sendFile(__dirname + '/recommend.html');
});

// 게시판
app.get('/board', function(req, res){
    res.sendFile(__dirname + '/board.html');
});

// top
app.get('/top', function(req, res){
    res.sendFile(__dirname + '/top.html');
});
