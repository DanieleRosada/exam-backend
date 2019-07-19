const queryController = require('./query');

module.exports = {
    getSezioni(callback) {
        let query = `SELECT * FROM public.sezioni`;
        let params = [];
        queryController.postgres(query, params, callback);
    },
    getSezioniAndNastri(callback) {
        let query = `SELECT * FROM public.sezioni s JOIN public.nastri  n ON (s.id = n.id_sezione) ORDER BY n.id_sezione`;
        let params = [];
        queryController.postgres(query, params, callback);
    },
}