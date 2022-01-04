const express = require('express');
let blogs = require('../database/dataBlog');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;

    const data = section ? blogs.filter(blog => blog.section === section) : blogs;

    res.render('index.html', {
        data
    });
});

router.get('/:id', (req, res, next) => {
    console.log(req.params);
    const id = req.params.id;

    const data = blogs.find(blog => blog.id === +id);

    res.render('blog.html', {
        data
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    const id = blogs.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const viewCount = 0;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    const blog = {
        id,
        title,
        content,
        section,
        viewCount,
        pubDate,
        modDate
    };

    blogs.push(blog);
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = blogs.find(blog => blog.id === +id);

    if (data) {
        data.title = req.body.title;
        data.content = req.body.content;
        data.section = req.body.section;
        data.modDate = new Date().toString();
        res.status(200).json(blogs)
    } else {
        res.status(404);
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    blogs = blogs.filter(blog => blog.id != id);

    res.status(200).json(blogs);
});

module.exports = router;