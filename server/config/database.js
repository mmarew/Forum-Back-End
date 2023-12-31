const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});
// DB_HOST,DB_USER,DB_PASS,MYSQL_DB
// let registration = `CREATE TABLE if not exists registration(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_email varchar(255) not null,
//     user_password varchar(255) not null,
//     PRIMARY KEY (user_id),
//     UNIQUE KEY (user_name)
//     )`;
let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    INDEX (user_name)
)`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
try {
  pool.query(registration, (err, results) => {
    if (err) throw err;
    console.log("registration table created");
  });
  pool.query(profile, (err, results) => {
    if (err) throw err;
    console.log("profile table created");
  });
} catch (error) {
  console.log("error is ", error);
}
module.exports = pool;
