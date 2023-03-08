const {verifyAToken} = ('./AuthenticatedUser.js');

function requireAuth(req, res, next) {
    if(req.authenticated) {
        next();
    } else {
        res.status(401).json({message: 'You must be logged in to access this resource'});
    }
}

module.exports = {requireAuth};