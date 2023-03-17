const Product = require('../models/ProductModel.js');

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }
    const product = new Product({
        prodName: req.body.prodName,
        prodDescription: req.body.prodDescription,
        platform: req.body.platform,
        price: req.body.price,
        quantity: req.body.quantity,
        prodImg: req.body.prodImg,
        userID: req.body.userID
    });

    Product.create(product, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating Product."
        });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const prodName = req.query.prodName;

    Product.getAll(prodName, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving"
        });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Product with id" + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
            if(err) {
                if(err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Product with id ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Product with id" + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.deleteProduct = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Product with id" + req.params.id
                });
            }
        } else res.send({message: `Product was deleted successfully`});
    });
};