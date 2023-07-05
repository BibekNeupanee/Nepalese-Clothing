const express = require("express");
const {
  getAllFabrics,
  insertFabric,
  searchFabrics,
  deleteFabric,
} = require("../controller/Fabric");
const router = express.Router();

router.route("/").get(getAllFabrics).post(insertFabric);
router.route("/search/:query").get(searchFabrics);
router.route("/:id").delete(deleteFabric);

module.exports = router;
