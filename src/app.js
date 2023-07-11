const express = require('express');

const UsersRouter = require('./routes/users');

module.exports = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));
    app.use(UsersRouter);

    return app;
};