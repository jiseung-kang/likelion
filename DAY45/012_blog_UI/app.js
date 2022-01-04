const nunjucks = require('nunjucks');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // 디버깅
const helmet = require('helmet'); // 보안
const blogRouter = require('./router/blog.js');

const app = express();
app.set('view engine', 'html');

nunjucks.configure('resource/template', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/blog', blogRouter);

app.get('/', (req, res, next) => {
    res.send('hello world')
    // res.render('test1.html', { 
    //     name : "hojun!",
    //     age : 10
    // });
});

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((err, req, res, next) => {
    console.log('Error!')
    console.log(err);
    res.sendStatus(500);
})

app.listen(8080);