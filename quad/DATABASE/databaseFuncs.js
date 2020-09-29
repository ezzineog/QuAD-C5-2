const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

const Users = function() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};

const addUsers = function(user) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users VALUES (${user.FirstName} ${user.LastName} ${user.Age} ${user.Avatar} ${user.Email} ${user.Password} ${user.Description} ${user.Description} ${user.PhoneNumber} ${user.AppliedJobs} ${user.AppliedJobs} ${user.Skills})`, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};

const updateUsers = function(user) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE users ----------------')
        if(err) { reject(err)}
        resolve(user)
    })
}
module.exports = {
    Users,addUsers,updateUsers
  };