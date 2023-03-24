const {requireAuth} = require('../middleware/RequireAuth.js');
const { verifyAToken, createToken} = require('../middleware/AuthenticatedUser.js');

module.exports = app => {
    var router = require("express").Router();

    const user = require("../controllers/UserControllers.js");
    router.post("/register", user.create);
    router.post("/login", user.loginUser);
    router.get("/users", user.findAll);
    router.get("/user/:id", user.findOne);
    router.put("/user/:id", user.update);
    router.delete("/user/:id", user.deleteUser);

    const product = require('../controllers/ProductControllers');
    router.post("/product", product.create);
    router.get("/products", product.findAll);
    router.get("/product/:id",verifyAToken, requireAuth, product.findOne);
    router.put("/product/:id", product.update);
    router.delete("/product/:id", product.deleteProduct);

    const cart = require('../controllers/CartControllers');
    router.post("/user/:id/cart", cart.create);
    router.get("/user/:id/carts", cart.findAll);
    router.put("/user/:id/cart", cart.update);
    router.delete("/user/:id/cart", cart.delete);

    app.use('/', router);
};