const queryController = require('./query');

module.exports = {
    insertData(nastro, callback) {
        let query = `INSERT INTO public.data("time", velocita, consumo, id_nastro) VALUES ($1, $2, $3, $4) RETURNING *;`;
        let params = [nastro.timestamp, nastro.velocita, nastro.consumo, nastro.id_nastro];
        queryController.timescale(query, params, callback);
    },
    getData(id_nastro, callback) {
        let query = `SELECT * FROM public.data WHERE id_nastro = $1 ORDER BY "time"`;
        let params = [id_nastro];
        queryController.timescale(query, params, callback);
    },
    getLastData(callback) {
        let query = `SELECT * FROM public.data WHERE (id_nastro, "time") in (select id_nastro, max("time") from public.data group by id_nastro)`;
        let params = [];
        queryController.timescale(query, params, callback);
    }
}