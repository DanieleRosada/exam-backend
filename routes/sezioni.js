const router = require('express').Router();
const sezioniController = require('../controllers/sezioni');

router.get('/all', function (req, res){
    sezioniController.getSezioniAndNastri(function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

router.get('/', function (req, res){
    sezioniController.getSezioni(function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

module.exports = router;