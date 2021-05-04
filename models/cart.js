const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,'../', 'data', 'cart.json');

module.exports = class Cart{
    static addProduct(id, productPrice){
        //reafFile at path p and then execute the callback 
        fs.readFile(p, (err,fileContent)=>{
            //creating a cart
            let cart = { products:[], totalPrice: 0};
            //if cart does exist that is no error
            if(!err){
                cart =  JSON.parse(fileContent);
            }
            //trying to find if the product is already added to the cart and increase theb quantity
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct){
                updatedProduct = {... existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                //update the cart by replacing the existing product
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = {
                    id: id,
                    qty:1
                };
                //add a new product to the cart 
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) =>{
                console.log(err);
            });
        });
    }
    }