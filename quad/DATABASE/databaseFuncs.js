const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
// Sign Up
// ==========================================================================
const Users = function () {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const addUsers = function (user) {
  console.log("users =======>", user);
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO users (FirstName, LastName, Email, Password) VALUES ('${user.FirstName}','${user.LastName}','${user.Email}','${user.Password}')`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
// ==========================================================================
// Setting up profiles

const UsersDescription = function () {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM UserDescription", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const addUsersDescription = function (user) {
  console.log("users =======>", user);
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO UserDescription (Age, Avatar, Description, PhoneNumber, Skills) VALUES (${user.Age},'${user.Avatar}','${user.Description}','${user.PhoneNumber}','${user.Skills}')`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
// update all the users datas
// const join = function (user) {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "SELECT * FROM users JOIN UserDescription ON users.UsersDescription_id = UsersDescription.UsersDescription_id"
//     );
//     if (err) {
//       reject(err);
//     }
//     resolve(user);
//   });
// };
const updateUsersAllData = function (user) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE TABLE users SET name = ${user.FirstName}, LastName = ${user.LastName},Email = ${user.Email}, Password = ${user.Password} INNER JOIN  UserDescription Age = ${user.Age}, Avatar = ${user.Avatar}, Description = ${user.Description},PhoneNumber = ${user.PhoneNumber}, Skills = ${user.Skills} WHERE user.id = userDescription.id`);
    if (err) {
      reject(err);
    }
    resolve(user);
  });
};

module.exports = {
  Users,
  addUsers,
  UsersDescription,
  addUsersDescription,
  updateUsersAllData
};
// (`UPDATE (JOINEDTABLES) SET
//         FirstName = ${user.FirstName}, LastName = ${user.LastName},
//         Description = ${user.Email}, Password = ${user.Password},
//         Age = ${user.Age}, Avatar = ${user.Avatar},
//         Description = ${user.Description},
//         PhoneNumber = ${user.PhoneNumber}, Skills = ${user.Skills}
//         WHERE userID = ${user.id}`)
