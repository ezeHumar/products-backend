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

//POST route for the product
router.post("/", upload.single("productImage"), productController.addProduct);

//GET (individual) route for the product
router.get("/:id", productController.retrieveSingleProduct);

//GET (all) route for the product
router.get("/", productController.retrieveAllProducts);

//PUT route for the product
router.put("/", upload.single("productImage"), productController.updateProduct);

//DELETE route for the product
router.delete("/:id", productController.removeProduct);


//The following rutes are dedicated to the product's images

//POST route for the image
router.post("/image", upload.single("productImage"), productController.addImage);

//PUT route for the image
router.put("/image", upload.single("productImage"), productController.updateImage);

//DELETE route for the image
router.delete("/:id/image", productController.deleteImage);

module.exports = router;