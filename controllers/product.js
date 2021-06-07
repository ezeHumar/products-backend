productService = require("../services/product");

//Adds a product
exports.addProduct = (req, res) => {
  //Gets the product's name, description, price and imageURL from the request body 
  //Gets the image path from the request body. It has been added with multer
  const name = req.body["name"];
  const description = req.body["description"];
  const price = req.body["price"];
  let imageURL = "images/default.png";//Firs, a default image URL is set
  if(req.body['imageURL'] !== ""){
    //If an image was upload, the imageURL variable is set with the image url received
    imageURL = req.body['imageURL'];
  }

  // If the name, description and price parameters are populated the product gets added to the database
  if (name && description && price) {
    //The product is uploaded to the database
    productService.addProduct(name, description, price, imageURL).then((data) => {
      res.json({msj: "The item was added correctly", id: data.id});
    }).catch((err) => {
      console.log(err);
      res.json("There was an error");
    });
  } else {
    //If one or more of the name, description and price parameters are not populated nothing gets added to the database and an error message gets returned
    res.json("The 'name', 'description' and 'price' parameters should be populated");
  }

}

//Returns all the products
exports.retrieveAllProducts = (req, res) => {
  productService.retrieveAllProducts()
    .then((data) => {
      //If the promise is resolved correctly, de data is returned
      res.json(data);
    }).catch(() => {
      //If the parameters are undefined, an error message gets returned
      res.json("There was an error");
    });
}

//Returns a single product by id
exports.retrieveSingleProduct = (req, res) => {
  //If the parameters are defined the products get retrived 
  if ((req.params !== undefined)) {
    productService.retrieveSingleProduct(req.params.id)
      .then((data) => {
        //If there an item found it gets returned
        if (data.length !== 0) {
          res.json(data);
        } else {
          //If no item were found, an error message gets returned
          res.json("There was an error");
        }

      }).catch(() => {
        //If the promise gives an error, an error message gets returned
        res.json("There was an error");
      });
  } else {
    //If the parameters are undefined, an error message gets returned
    res.json("There was an error");
  }
}

//Updates a product
exports.updateProduct = (req, res) => {
  //Gets the product's id, name, description, price and imageURL from the request body 
  //Gets the image path from the request body. It has been added with multer
  const id = req.body["id"];
  const name = req.body["name"];
  const description = req.body["description"];
  const price = req.body["price"];

  // If the id, name, description and price parameters are populated the product gets added to the database
  if (id && name && description && price) {
    //The product is updated in the database
    productService.updateProduct(id, name, description, price).then((data) => {
      //If data[1] is 1 it means that a tople has been updated
      if (data[0] !== 0) {
        //If the touple has been updated a successfull message is sent
        res.json("The item has been updated correctly");
      } else {
        //If no touple is updated an error message is sent
        res.json("There was an error");
      }
    }).catch(() => {
      res.json("There was an error");
    });
  } else {
    //If one or more of the id, name, description and price parameters are not populated nothing gets updated in the database and an error message gets returned
    res.json("The 'id', 'name', 'description' and 'price' parameters should be populated");
  }
}

//Removes a product from the database
exports.removeProduct = async (req, res) => {
  //If the parameters are defined the product get removed
  if ((req.params !== undefined)) {
    productService.removeProduct(req.params.id)
      .then((data) => {
        //If data is 1 it means that a touple has been deleted, if it's 0 it means that no tuple has been deleted
        if (data === 1) {
          //If the touple has been removed a succesfull message is sent
          res.json("The item has been deleted correctly");
        } else {
          //If no touple has been removed an error message is sent
          res.json("There was an error");
        }
      }).catch(() => {
        //If the promise gives an error, an error message gets returned
        res.json("There was an error");
      });
  } else {
    //If the parameters are undefined, an error message gets returned
    res.json("There was an error");
  }
}

//Returns (in the response) the path of the image that has been uploaded
exports.addImage = (req, res) => {
  if (req.file !== undefined) {
    //If an image was upload, the imageURL variable is set with the image path
    //Gets the image path from the request body. It has been added with multer
    const imageURL = req.file.path;
    res.json(imageURL);
  } else {
    //If there's no image in the request, an error message gets returned
    res.json("There was an error");
  }
}

//Updates the image of a product
exports.updateImage = (req, res) => {
  //Gets the product's id
  const id = req.body["id"];

  if (req.file !== undefined) {
    //If an image was upload, the imageURL variable is set with the image path
    //Gets the image path from the request body. It has been added with multer
    const imageURL = req.file.path;
    productService.updateImage(id, imageURL)
      .then(() => {
        //If the image has been updated, a successfull message is sent
        res.json("The image has been updated correctly");
      })
      .catch((err) => {
        //If no image is updated, an error message is sent
        console.log(err);
        res.json("There was an error");
      })
  } else {
    //If there's no image in the request, an error message gets returned
    res.json("There was an error");
  }
}

//Deletes the image of a product
exports.deleteImage = (req, res) => {
  //Gets the product's id
  console.log(req.params.id)
  const id = req.params.id;

  productService.deleteImage(id)
  .then(() => {
    //If the image has been deleted, a successfull message is sent
    res.json("The image has been deleted correctly");
  })
  .catch((err) => {
    //If no image is deleted, an error message is sent
    console.log(err);
    res.json("There was an error");
  });
}