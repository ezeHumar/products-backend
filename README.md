# Products Backend

This project is an api that allows you to add products to a database

## Import the database

Import the database products-database.sql in a database called 'products'

## Get the api running

Install all the dependencies

```
npm install
```

Get the server running. With this command the server will by running on localhost:3000/

```
npm run dev
```
___

## **API endpoints**

## Products

**GET**

For retrieving all products

```http
GET /products
```

For retrieving a single product by id

```http
GET /products/:id
```

**POST**

For adding a product:

```http
POST /products
```

The body should should have the following parameters:

Required:

`
name=[string]
` - The product's name

`
description=[string] 
` - The product's description

`
price=[float]
` - The product's price

Optional:

`
imageURL=[string]    
` - The product's image's URL

**PUT**

For updating a product:

```http
PUT /products
```

The body should should have the following parameters:

Required:

`
id=[integer]
` - The product's id

`
name=[string]
` - The product's name

`
description=[string] 
` - The product's description

`
price=[float]
` - The product's price


**DELETE**

For deleting a product by id

```http
DELETE /products/:id
```

## Images

**GET**

For retrieving a single image by name

```http
GET /images/:name
```

**POST**

It should be form-data.

For adding an image:

```http
POST /products/image
```

The body should should have the following parameters:

Required:

`
productImage=[file]    
` - The product's image

**PUT**

It should be form-data.

For updating a product's image:

```http
PUT /products/image
```

The body should have the following parameters:

Required:

`
id=[integer]
` - The product's id

`
productImage=[file]    
` - The product's image


**DELETE**

For deleting a product image by id

```http
DELETE /products/:id/image
```

The id parameter is the product's id