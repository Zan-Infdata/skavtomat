var stanje =require("../../public/stanje")

const main = (req, res) => {
    res.render("index", { title: "Pregled" });
};

const orli = (req, res) => {
    res.render("vod", { title: "Orli" });
};

const levi = (req, res) => {
    res.render("vod", { title: "Levi" });
};

const tigri = (req, res) => {
    res.render("vod", { title: "Tigri" });
};

const pume = (req, res) => {
    res.render("vod", { title: "Pume" });
};

const kune = (req, res) => {
    res.render("vod", { title: "Kune" });
};

const lisice = (req, res) => {
    res.render("vod", { title: "Lisice" });
};

const gazelce = (req, res) => {
    res.render("vod", { title: "Gazelce" });
};

const getStanje = (req, res) => {
    res.status(200).json(stanje.stanja);
};

const setStanje = (req, res) => {

    if(req.body["dodatek"] != null) {
        stanje.stanja[req.body.vod] += req.body["dodatek"];
        res.status(200).json(stanje.stanja);
    }
    else {
        res.status(400);
    }
};


module.exports = {
    main,
    orli,
    levi,
    tigri,
    pume,
    kune,
    lisice,
    gazelce,
    getStanje,
    setStanje
};