const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
// Sign Up
// ==========================================================================
const addUser = function(user) {

    console.log('users =======>',user)
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users SET ?`, user, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};
// ==========================================================================
// Setting up profiles

const editUser = function(user) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', user, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });

    });
  }




//=======================
// bringing job offers

const jobOffers = function() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM joboffers', (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });

};

const getUser = function(email) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users where Email = '${email}' `, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
};
const addCompanySignUpData = function(user) {
  console.log('users =======>',user)
  return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO company SET ?`, user, (err ,data) => {
          if(err) { reject(err)}
          resolve(data)
      });
  });
};
module.exports = {
    getUser,
    addUser,
    editUser,
    jobOffers,
    addCompanySignUpData

  };
  
  // const updateUsersDescription = function(user) {
//     return new Promise((resolve, reject) => {
//         connection.query('UPDATE describe ----------------')
//         if(err) { reject(err)}
//         resolve(user)
//     })
// },updateUse
