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

//Function for retrieving all products from the database
exports.retrieveAllProducts = async () => {
    return Product.findAll();
}

//Function for retrieving a single product by id
exports.retrieveSingleProduct = async (id) => {
    return Product.findOne({
        where: {
            id: id
        }
    });
}

//Function for updating a product, passing the id
exports.updateProduct = async (id, name, description, price, imageURL) => {
    return Product.update(
        {
            name: name,
            description: description,
            price: price,
            imageURL: imageURL
        },
        { where: { id: id } }
    )
}

//Function for deleting a touple, passing the id
exports.removeProduct = async (id) => {
    return Product.destroy({
        where: {
            id: id
        }
    });
}