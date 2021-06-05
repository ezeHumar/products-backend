productService = require("../services/product");

exports.addProduct = (req, res) => {

    //Gets the product's name, description, price and imageURL from the request body 
    const name = req.body["name"];
    const description = req.body["description"];
    const price = req.body["price"];
    let imageURL = "default.png"; //If no image was upload, the imageURL variable is set with a default value
    if (req.file !== undefined) {
        //If an image was upload, the imageURL variable is set with the image path
        imageURL = req.file.path;
    }

    // If the name, description and price parameters are populated the product gets added to the database
    if (name && description && price) {
        //The product is uploaded to the database
        productService.addProduct(name, description, price, imageURL).then(() => {
            res.json("The item was added correctly");
        }).catch(() => {
            res.json("There was an error");
        });
    } else {
        //If one or more of the name, description and price parameters are not populated nothing gets added to the database and an error message gets returned
        res.json("The 'name', 'description' and 'price' parameters should be populated");
    }

}