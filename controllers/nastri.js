const queryController = require('./query');

module.exports = {
    getNastri(callback) {
        let query = `SELECT * FROM public.nastri;`;
        let params = [];
        queryController.postgres(query, params, callback);
    },
    getNastriBySezione(id_sezione, callback) {
        let query = `SELECT * FROM public.nastri WHERE id_sezione = $1`;
        let params = [id_sezione];
        queryController.postgres(query, params, callback);
    }
}