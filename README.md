# Products Backend

_This project is an api that allows you to add products to a database_

## Get the api running

Install all the dependencies

```
npm install
```

Get the server running. With this command the server will bi running on localhost:3000/

```
npm run dev
```
___

## API endpoints

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

It should be form-data.

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
productImage=[file]    
` - The product's image

**PUT**

It should be form-data.

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

Optional:

`
productImage=[file]    
` - The product's image

**DELETE**

For deleting a product by id

```http
DELETE /products/:id
```