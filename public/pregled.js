

const VODI =    ["orli",
                "levi",
                "tigri",
                "gazelce",
                "lisice",
                "pume",
                "kune"]

const STANJE = "Stanje: ";


document.addEventListener("DOMContentLoaded", function(event) {

    fetch('/getStanje')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            VODI.forEach(vod => {
                var dom = document.getElementById(vod);
                vod = vod.charAt(0).toUpperCase() + vod.slice(1);
                dom.innerHTML = STANJE + myJson[vod];
            });

        })


});