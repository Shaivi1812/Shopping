const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product!',
        path: '/admin/add-product',
        editing: false
    });
}

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next) => {
    //const editMode = req.query.edit;
    const prodId = req.params.productId;
    const editMode = true;
    console.log(editMode);
    Product.findById(prodId, product => {
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product!',
            path: '/admin/edit-product',
            editing: editMode,
            product : product
        });
    });
}

exports.getProduct = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            pageTitle: 'Admin Products!',
            path: '/admin/products'
        });
    });
}