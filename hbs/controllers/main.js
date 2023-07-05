var stanje =require("../../public/stanje")
const { MdVod } = require("../models/db");

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

async function getStanje(req, res){

    // no cache query the db
    if (stanje.stanja["cached"] == 0){
        let raw_response = await MdVod.getAll()
        
        for(i in raw_response.DATA){
            let vod = raw_response.DATA[i];

            stanje.stanja[vod[MdVod.name]] = vod[MdVod.credit];
        }
        stanje.stanja["cached"] = 1;
    }
    
    res.status(200).json(stanje.stanja);

    
};

async function setStanje(req, res){

    if(stanje.stanja["cached"] == 0){
        await fetch('/getStanje')
            .then(function(response) {
                return response.json();
            })
    }

    if(req.body["dodatek"] != null) {
        stanje.stanja[req.body.vod] += req.body["dodatek"];

        // update the DB
        MdVod.setVodByName(req.body.vod, stanje.stanja[req.body.vod]);


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