const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);
// Sign Up 
// ==========================================================================
const Users = function() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM signup', (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};

const addUsers = function(user) {
    console.log('users =======>',user)
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO signup (FirstName, LastName, Email, Password) VALUES (${user.FirstName}','${user.LastName}','${user.Email}','${user.Password}')`, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};
// ==========================================================================
// Setting up profiles

const UsersDescription = function() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM describe', (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};

const addUsersDescription = function(user) {
    console.log('users =======>',user)
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO describe (Age, Avatar, Description, PhoneNumber, Skills) VALUES (${user.Age},'${user.Avatar}','${user.Description}','${user.PhoneNumber}','${user.Skills}')`, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};


module.exports = {
    Users,addUsers,
    UsersDescription,addUsersDescription
  };
  
  // const updateUsersDescription = function(user) {
//     return new Promise((resolve, reject) => {
//         connection.query('UPDATE describe ----------------')
//         if(err) { reject(err)}
//         resolve(user)
//     })
// },updateUse