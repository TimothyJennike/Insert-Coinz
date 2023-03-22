require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPaswrd: user.userPaswrd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}

function verifyAToken(req, res, next) {
    try{
        const token = req.cookies["Legit"] !== null ? req.cookies["Legit"] :
        "Please register" ;
        let isValid = null;
        if(token != "Please register") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            } else {
                res.status(400).json({err: "Please register"})
            }
        } else {
            res.status(400).json({err: "Please register"})
        }
    } catch(e) {
        res.status(400).json({err:e.message});
    }
}
module.exports = {createToken, verifyAToken};