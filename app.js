const express = require('express');
const routerProducts = require("./routes/product");
const cors = require('cors');
app = express();

// //CORS settings
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Support for reading json bodies
app.use(express.json());
//Support for url-encoded body
app.use(express.urlencoded({ extended: true }));
//The /images path gets defined as a static source
app.use('/images', express.static('images'));

//routerProducts handles the request for the /products route
app.use('/products', routerProducts);

module.exports = app;