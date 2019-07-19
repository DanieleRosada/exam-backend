const Nastro = require("../classes/nastro");
const nastriController = require("../controllers/nastri");
const axios = require('axios');

var Nastri = [];

inizializate();
setInterval(velocita, 30000); //30 secondi
setInterval(consumo, 10000); //10 secondi

function inizializate() {
    nastriController.getNastri((err, nastri) => {
        if (err) throw err;

        nastri.forEach(nastro => {
            Nastri.push(new Nastro(nastro.id));
        });
        console.log(Nastri);
    });
  
}


function velocita() {
    Nastri.forEach((n) => {
        sendState(n.velocitaEvent());
    });
}

function consumo() {
    Nastri.forEach((n) => {
        sendState(n.consumoEvent());
    });
}

function sendState(payload) {
    if (payload)
        axios.post('http://127.0.0.1:222/data/queue', {
            payload: payload,
        })
            .catch(function (error) {
                throw error;
            });
}
