productService = require("../services/product");

//Adds a product
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
    if((req.params !== undefined)){
        productService.retrieveSingleProduct(req.params.id)
        .then((data) => {
            //If there an item found it gets returned
            if(data.length !== 0){
                res.json(data);
            }else{
                //If no item were found, an error message gets returned
                res.json("There was an error");
            }
            
        }).catch(() => {
            //If the promise gives an error, an error message gets returned
            res.json("There was an error");
        });
    }else{
        //If the parameters are undefined, an error message gets returned
        res.json("There was an error");
    }
    

}