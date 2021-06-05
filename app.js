const express = require('express');
const routerProducts = require("./routes/product");
app = express();

//Support for reading json bodies
app.use(express.json());
//Support for url-encoded body
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('images'));

//routerProducts handles the request for the /products route
app.use('/products', routerProducts);

module.exports = app;