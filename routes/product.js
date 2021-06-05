const productController = require("../controllers/product");
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("The file has to have an jpeg or png extension"), false);
    }
}

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});

//Post route for the product
router.post("/", upload.single("productImage"), productController.addProduct);

module.exports = router;