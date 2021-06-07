const Product = require("../models/product");
const fs = require('fs');

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
exports.updateProduct = async (id, name, description, price) => {
  return Product.update(
    {
      name: name,
      description: description,
      price: price
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

//Function for updating the image of a product. And deleting the old image
exports.updateImage = async (id, imageURL) => {
  //Retrives the image url of the product that is going to be updated, so the image can be deleted
  Product.findOne({
    where: {
      id: id
    }
  })
    .then((data) => {
      //If the image is not the default image, it gets deleted
      if (data.dataValues.imageURL !== "images/default.png") {
        fs.unlinkSync(data.dataValues.imageURL);
      }
    });

  //The product gets updated with the path of the new image
  return Product.update(
    {
      imageURL: imageURL
    },
    { where: { id: id } }
  )
}

//Function for deleting the image path of a product.
//A default image is provided to the product
exports.deleteImage = async (id) => {
  //Retrives the image url of the image that is coing to be deleted
  Product.findOne({
    where: {
      id: id
    }
  })
    .then((data) => {
      //If the image is not the default image, it gets deleted
      if (data.dataValues.imageURL !== "images/default.png") {
        fs.unlinkSync(data.dataValues.imageURL);
      }
    });

  //The product gets updated with the path of a default image
  return Product.update(
    {
      imageURL: "images/default.png"
    },
    { where: { id: id } }
  )
}