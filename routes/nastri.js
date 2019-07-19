const router = require('express').Router();
const nastriController = require('../controllers/nastri');

router.get('/', function (req, res){
    nastriController.getNastri(function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

router.get('/:id_nastro', function (req, res){
    let id_nastro = req.params.id_nastro;
    nastriController.getNastriBySezione(id_nastro, function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

module.exports = router;    