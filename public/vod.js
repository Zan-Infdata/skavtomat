


document.addEventListener("DOMContentLoaded", function(event) {
    var vodKy = document.getElementById("vod").innerHTML;
    vodKy = vodKy.substring(1, vodKy.length - 1);

    var dodajDOM = document.getElementById("dodaj");
    var vzamiDOM = document.getElementById("vzami");

    

    dodajDOM.addEventListener("click", function(_) {

        var x = document.getElementById("x").value;

        var dataJson = {
            "vod": vodKy,
            "dodatek" : parseInt(x)
        };

        fetch('/setStanje', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataJson),
          })
            .then((response) => response.json())
            .then((data) => {
                location.reload();
            })
            .catch((error) => {
              console.error('Error:', error);
            });

    });

    vzamiDOM.addEventListener("click", function(event) {

        var x = document.getElementById("x").value;

        var dataJson = {
            "vod": vodKy,
            "dodatek" : parseInt("-"+x)
        };

        fetch('/setStanje', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataJson),
          })
            .then((response) => response.json())
            .then((data) => {
                location.reload();
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    });


    fetch('/getStanje')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            showMoney(myJson, vodKy);
        })
    






});


function showMoney(data, ky){


    var vodStanje = document.getElementById("stanje");
    vodStanje.innerHTML = data[ky];

}