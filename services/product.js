const Product = require("../models/product");

//Function for adding a product to the database
exports.addProduct = async (name, description, price, imageURL) => {
    return Product.create({
        name: name,
        description: description,
        price: price,
        imageURL: imageURL
    });
}
