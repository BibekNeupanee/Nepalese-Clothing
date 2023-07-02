const express = require("express");
const { getAllFabrics } = require("../controller/Fabric");
const router = express.Router();

router.route("/").get(getAllFabrics).post();

router
  .route("/:id")
  .get()
  .put((req, res) => {
    res.status(200).json({ message: "Updated" });
  })
  .delete((req, res) => {
    res.status(200).json({ message: "Deleted" });
  });

module.exports = router;
