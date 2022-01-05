// 맨 앞부분에 trim(공백제거), toLowerCase 등을 사용해서 제대로 된 값이 들어가게 할 필요가 있음
// https://express-validator.github.io/docs/sanitization-chain-api.html
// 자세한 것은 validator.md를 참고해주세요.

// npm i express express-validator
// npm i nodemon --save-dev
// 메시지 추가!
/*
http://localhost:8080/signup, raw, json
{
    "name":"leehojun",
    "age":10,
    "nickname":"paullab"
}
*/

const express = require('express');
const { param } = require('express-validator');
const expressValidator = require('express-validator');
const valibody = expressValidator.body; // body검사
const valicheck = expressValidator.check; // body와 param 모두 검사
const valiparam = expressValidator.param; // param 검사
const valiresult = expressValidator.validationResult;

const app = express();
app.use(express.json());

// valibody를 모아 하나의 리스트로 묶기도 합니다. 저는 아래와 같이 사용해요.
app.post(
    '/signup', 
    valibody('name').trim().isLength({ min: 3, max: 20 }).withMessage('이름 : 3자이상 20자 이하!!'),
    valibody('nickname').isLength({ min: 3, max: 20 }).withMessage('닉네임 : 3자이상 20자 이하!!'), 
    (req, res, next) => {
        const err = valiresult(req);
        if (err.isEmpty()){
            console.log(req.body);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            res.status(201).send('hello world!!');; // 201 Created
        } else {
            console.log(req.body);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            // res.status(400).send('error!!');; // 400 Bad Request
            // res.status(400).json({ error : err });
            res.status(400).json({ error : err.array() });
        }
    });

app.get(
    '/:postid',
    param('postid').isInt().withMessage('그런 페이지는 읎어요!'),
    (req, res, next) => {
        const err = valiresult(req);
        if (err.isEmpty()){
            console.log(req.params);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            res.status(201).send('hello world!!');; // 201 Created
        } else {
            console.log(req.params);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            // res.status(400).send('error!!');; // 400 Bad Request
            // res.status(400).json({ error : err });
            res.status(400).json({ error : err.array() });
        }
});

app.listen(8080);