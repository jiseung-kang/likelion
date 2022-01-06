const express = require('express');
const blogdatabase = require('../data/blogdatabase.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;
    section ? 
    blogdatabase.findBySection(section)
    .then(data => res.render('post.html', {data})) : 
    
    blogdatabase.getAll()
    .then(data => res.render('post.html', {data}));
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    blogdatabase.findById(id)
    .then(blog => res.render('postdetails.html', {blog}));
})

router.post('/', (req, res, next) => {
    const title = req.body.title; // const {key1, key2...} = req.body;
    const content = req.body.content;
    const section = req.body.section;
    let blog = {title, content, section};
    const id = blogdatabase.createBlog(blog);
    res.status(201).json({id}); // 201은 create
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const blog = blogdatabase.findById(id);
    if (blog){ // 각각의 값이 비어있을 수도 있음
        res.status(200).json(blog);
    } else {
        res.status(404);
    }
})

// 삭제(DELETE) : blog/:id
// router.delete('/:id', (req, res, next) => {
//     const id = req.params.id;
//     blogs = blogs.filter(b => b.id != id) 
//     res.status(200).json(blogs); //굳이 204를 보내줄거면 200로
// })


module.exports = router;
module.exports['blogs'] = blogdatabase.getAll(); // 좋은 방법은 아닙니다. DB 할 때 다시 리펙토링 해야합니다.