const dataController = require('../controllers/data');
const rabbit = require('../structure/rabbit');

rabbit.reciveToQueue('dataQueue', function (nastro) {
    dataController.insertData(nastro, (err, rows) => {
        if (err) throw err;
        rabbit.sendToQueue('sendQueue', rows[0]);
    });

});