const { Router } = require("express");
const { getCharById } = require("../controllers/getCharByID");
const { getCharDetail } = require("../controllers/getCharDetail");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

module.exports = router;
