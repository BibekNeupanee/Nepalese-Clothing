const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nepalese_clothing",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

connection.query(`SELECT * FROM  product` , (err, results) => {
  if (err) {
    console.error("Error executing MySQL query:", err);
    return;
  }

  console.log("Retrieved data:", results);
});

connection.end((err) => {
  if (err) {
    console.error("Error closing MySQL connection:", err);
    return;
  }
  console.log("MySQL connection closed!");
});
