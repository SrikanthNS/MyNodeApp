var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    console.log(req.params);
    req.accepts('application/json');
    var data = req.body;
    if(data.username == 'admin' && data.password == 'admin') {
        res.semd('Success');
    } else {
        res.send('Failed');
    }
});

module.exports = router;
