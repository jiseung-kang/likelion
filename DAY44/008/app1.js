// express 모듈 가져오기. 현재 express 모듈이 없다
// 모듈은 코드의 뭉텅이
// npm init --yes
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  console.log('get으로 /페이지에 요청이 들어왔습니다.')
  res.send('hello world')
});

app.get('/blog', (req, res, next) => {
  console.log('get으로 /blog페이지에 요청이 들어왔습니다.')
  res.send('<h1>hello worlds</h1><p>hello</p>')
});

app.get('/about', (req, res, next) => {
  console.log('get으로 /about페이지에 요청이 들어왔습니다.')
  res.send('<h1>hello about</h1><p>hello</p>')
});

app.get('/product', (req, res, next) => {
  console.log('get으로 /product페이지에 요청이 들어왔습니다.')
  res.send('<h1>hello product</h1><p>hello</p>')
});

app.listen(8080);