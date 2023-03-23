const User = require("../models/UserModel.js");

const { hash, compare, hashSync} = require('bcrypt');

const {createToken} = require('../middleware/AuthenticatedUser');

exports.create = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        cellphoneNumber: req.body.cellphoneNumber,
        emailAdd: req.body.emailAdd,
        userPaswrd: req.body.userPaswrd,
        userRole: req.body.userRole,
        userProfile: req.body.userProfile,
        joinDate: req.body.joinDate
    });

    user.userPaswrd = await
    hash(user.userPaswrd, 15);

    User.create(user, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
        else {
            const jwt = createToken(user);
            res.cookie('Legit', jwt, {
                maxAge: 3600000000,
                httpOnly: true,
                path: '/'
            });
            res.status(200).json({message: "A user record was saved ."})
        }
    });
};

exports.loginUser = async (req, res) => {
    const {emailAdd, userPaswrd} = req.body;
    User.login(req.body, (err, data) => {
        if(err) throw err;
        if((!data.length) || (data == null)) {
            res.status(401).json({
                err:
                "You provide a wrong email address"
            });
        } else {
            compare(userPaswrd,
                data[0].userPaswrd,
                (cErr, cResult) => {
                    if(cErr) throw cErr;
                    const jwt = createToken({emailAdd, userPaswrd});
                    res.cookie('Legit',
                    jwt, {
                        maxAge: 3600000000,
                        httpOnly: true,
                        path: '/'
                    })
                    if(cResult) {
                        res.status(200).json({
                            message: 'Logged in',
                            jwt,
                            result: data[0],
                        })
                    } else {
                        res.status(401).json({
                            err: 'You entered an invalid password or did not register.'
                        })
                    }
                })
        }
    })
}

exports.findAll = (req, res) => {
    const firstName = req.query.firstName;

    User.getAll(firstName, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving data"
        });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id" + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    let data = req.body;
    if (data.userPaswrd != null || data.userPaswrd != undefined) {
        data.userPaswrd = hashSync(data.userPaswrd, 15);
    } console.log(req.body);

    User.updateById(req.params.id, new User(req.body), (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating User with id "  + req.params.id
                });
            }
        } else {
            res.send(data);
            console.log(`Update user with id ${req.params.id}`);
        }
    }
    );
};


exports.deleteUser = (req, res) => {
    User.remove(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.id
                });
            } 
        } else res.send({message: `User was deleted successfully`});
    });
};
