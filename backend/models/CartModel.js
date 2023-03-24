const sql = require('./db.js')

const Cart = function(cart) {
    this.userID = cart.userID;
    this.prodId = cart.prodId;
};

Cart.create = (cart, result) => {
    sql.query("INSERT INTO Cart SET ?", cart, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Cart created: ", {id: res.insertId, ...cart});
        result(null, {id: res.insertId, ...cart});
    });
};

Cart.getAll = (userID, result) => {
    let query = "select c.CartID, u.userID, p.prodName, p.quantity, p.platform, p.prodImg, p.price FROM Cart c Inner join Products p ON c.prodID = p.prodID Inner join Users u ON c.userID = u.userID";
    if(userID) {
        query += ` WHERE u.userID LIKE '${userID}'`;
    }
    sql.query(query, (err, res) => {
        if(err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        console.log("Cart: ",res);
        result(null, res);
    });
};

// Products.updateById = (id, product, result) => {
//     sql.query('UPDATE Products SET prodName = ?, prodDescription = ?, platform = ?, price = ?, quantity = ?, prodImg = ?, userID = ? WHERE id = ??', [product.prodName,product.prodDescription, product.platform, product.price, product.quantity, product.prodImg, product.userID, id],
//     (err, res) => {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         if(res.affectedRows == 0) {
//             result({kind: "not_found"}, null);
//             return;
//         }
//         console.log("updated product: ", {id:id, ...product});
//         result(null, {id: id, ...product});
//     }
//     );
// };

Cart.remove = (CartID, result) => {
    sql.query("DELETE FROM Cart WHERE CartID = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }
        console.log("Deleted cart with ID: ", id);
        result(null, res);
    });
};

Cart.removeAll = (CartID, result) => {
    sql.query('TRUNCATE TABLE Cart', (err, res) => {
        if(err) {
            console.log(err);
            result(err, null)
        }
        console.log('All products have been removed');
        result(null, res)
    })
}

module.exports = Cart;