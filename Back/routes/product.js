const express = require("express");
const { connection } = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM fabric", (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
  
      res.json(results);
    });
  });

module.exports = router;
