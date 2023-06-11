const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nepalese_clothing",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM product", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    res.json(results);
  });
});

app.post("/", async function (request, response) {
  const { name, price } = request.body;
  console.log(request.body);
  try {
    await connection.query(
      "INSERT INTO product (name, price) VALUES (?, ?)",
      [name, price]
    );
    console.log("LSKFLSKDJFLSKDFJ");
    return response.sendStatus(201);

  } catch (e) {
    console.log(e);
    return response.status(500).send();
  }
});

app.listen(3000, function () {
  console.log("Server Running at port 3000");
});
