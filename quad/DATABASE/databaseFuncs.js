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
    connection.query(`INSERT INTO users SET ?`, user, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);

    });
  }


// get the signed in freelancer
  const getUser = function(email) {
      return new Promise((resolve, reject) => {
          connection.query(`SELECT * FROM users where Email = '${email}' `, (err ,data) => {
              if(err) { reject(err)}
              resolve(data)
          });
      });
  };
// add application
  const apply = function(Ids) {
    console.log('Ids =======>',Ids)
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO applications SET ?`, Ids, (err ,data) => {
            if(err) { reject(err)}
            resolve(data)
        });
    });
  };


// ==========================================================================
//===========JOB OFFERS ============
   // bringing job offers

const GetjobOffers = function () {
    return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM joboffers", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// inserting job offers

const AddJobOffers = function (job) {
  console.log("jobs =======>", job);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO joboffers (companyId ,JobTitle ,Description) VALUES ('${job.companyId}','${job.JobTitle}','${job.Description}')`, (err, jobData) => {
      if (err) {
        reject(err);
      }
      resolve(jobData);
    });

  });
};
//=================Company=====================
const addCompanySignUpData = function (company) {
  console.log("companys ADD =======>", company);

  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO company SET ?`, company, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
const GetCompanySignUpData = function (company) {

  console.log("companys GET =======>", company);

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM company`, (err, CompanyData) => {
      if (err) {
        reject(err);
      }
      resolve(CompanyData);
    });
  });
};


module.exports = {
  Users,
  addUsers,
  GetjobOffers,
  addCompanySignUpData,
  AddJobOffers,
  updateUsersAllData,
  GetCompanySignUpData
};
// ,
// UsersDescription,
// addUsersDescription,

//
// const updateUsersDescription = function(user) {
//     return new Promise((resolve, reject) => {
//         connection.query('UPDATE describe ----------------')
//         if(err) { reject(err)}
//         resolve(user)
//     })
// },updateUse

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
