require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const multer = require("multer");
const mime = require("mime-types");

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

// app.use(express.urlencoded({ extended: false }));

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

app.post("/", upload.single("image"), async function (request, response) {
  const imageURL = `${process.env.BASE_URL}:${process.env.PORT}/uploads/${request.file.filename}`;

  const { name, price } = request.body;

  try {
    await connection.query(
      "INSERT INTO product (name, price,image) VALUES (?, ?, ?)",
      [name, price,imageURL]
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
