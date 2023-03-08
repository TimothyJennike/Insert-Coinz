const sql = require('./db.js');

const Users = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.cellphoneNumber = user.cellphoneNumber;
    this.emailAdd = user.emailAdd;
    this.userPaswrd = user.userPaswrd;
    this.userRole = user.Role;
    this.userProfile = user.userProfile;
    this.joinDate = user.joinDate;
};

Users.create = (newUser, result) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if(err) {
            console.log("error", err);
            result(err, null);
            return;
        } else {
            result(null, res)
        }
    });
};

Users.login = (user, result) => {
    sql.query('SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPaswrd, userRole, userProfile, joinDate FROM Users WHERE emailAdd = ?', [user.emailAdd], async (err, res) =>{
        if(err) {
            console.log('error', err);
            result(err, null)
            return;
        } else {
            result(null, res)
        }
    })
}

Users.findById = (id, result) => {
    sql.query(`SELECT * FROM Users WHERE userID = ${id}`, (err, res) => {
        if(err) {
            console.log('error', err);
            result(err, null);
            return;
        }
        if(res.length) {
            console.log("found user: ",res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Users.getAll = (firstName, result) => {
    let query = "SELECT * FROM Users";
    if(firstName) {
        query += `WHERE firstName LIKE '%${firstName}%'`;
    }
    sql.query(query, (err, res) => {
        if(err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};

Users.updateById = (id, user, result) => {
    sql.query('UPDATE Users SET firstName = ?, lastName = ?, gender = ?, cellphoneNumber = ?, emailAdd = ?, userPaswrd = ?, userRole = ?, userProfile = ?, joinDate = ? WHERE userID = ?', [user.firstName, user.lastName, user.gender, user.cellphoneNumber, user.emailAdd, user.userRole, user.userPaswrd, user.userProfile, user.joinDate, id],
    (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }
        console.log("updated user: ", {id: id, ...user});
        result(null, {id:id, ...user});
    }
    );
};

Users.remove = (id, result) => {
    sql.query("DELETE FROM Users WHERE userID = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if(res.affectedRows == 0) {
            result({kind : "not_found"}, null);
            return;
        }
        console.log("Deleted user with ID: ", id);
        result(null, res);
    });
};

module.exports = Users;