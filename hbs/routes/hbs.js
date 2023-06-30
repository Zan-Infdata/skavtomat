const express = require("express");
const router = express.Router();


const ctrlMain = require("../controllers/main");



router.get("/", ctrlMain.main);
router.get("/orli", ctrlMain.orli);
router.get("/levi", ctrlMain.levi);
router.get("/tigri", ctrlMain.tigri);
router.get("/gazelce", ctrlMain.gazelce);
router.get("/pume", ctrlMain.pume);
router.get("/lisice", ctrlMain.lisice);
router.get("/kune", ctrlMain.kune);

router.get("/getStanje", ctrlMain.getStanje);
router.put("/setStanje", ctrlMain.setStanje);



module.exports = router;