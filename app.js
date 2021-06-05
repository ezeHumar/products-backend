const express = require('express');
app = express();

//Support for reading json bodies
app.use(express.json());
//Support for url-encoded body
app.use(express.urlencoded({ extended: true }));

module.exports = app;