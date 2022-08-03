const { getAllPosts } = require('../db');

const express = require('express');
const postsRouter = express.Router();


postsRouter.use((req, res, next) => {
    console.log("A request is being made to /users");

    next(); // THIS IS DIFFERENT
});

postsRouter.get('/', async (req, res) => {
    const posts = await getAllPosts();

    res.send({
        posts
    });
});

module.exports = postsRouter;
