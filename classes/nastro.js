module.exports = class Nastro {

    constructor(id_nastro) {
        this.Id_nastro = id_nastro;
    }

    randomVelocita() {
        return Math.floor(Math.random() * 60) + 20; //tra 20 e 79
    }

    randomConsumo() {
        return Math.floor(Math.random() * 80); //tra 0 e 79
    }

    payload() {
        let data = {
            timestamp: new Date(),
            id_nastro: this.Id_nastro,
            velocita: null,
            consumo: null
        };

        return data;
    }

    consumoEvent() {
        let data = this.payload();
        let consumo = this.randomConsumo();
        if (consumo < 60) return null;
        
        data.consumo = consumo;
        return data;
    }

    velocitaEvent() {
        let data = this.payload();
        data.velocita = this.randomVelocita();

        return data;
    }
}