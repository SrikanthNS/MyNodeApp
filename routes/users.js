var express = require('express');
var router = express.Router();
var userList = [
  {id:1, name: 'Srikanth N S', email: 'srikanth.ns@tavant.com', city: 'Bengaluru'},
  {id:2, name: 'Kiran', email: 'kiran.m@tavant.com', city: 'Bengaluru'},
  {id:3, name: 'Venkat', email: 'venkat@tavant.com', city: 'Bengaluru'},
  {id:4, name: 'Malli', email: 'mandala.mallikarjuna@tavant.com', city: 'Bengaluru'},
  {id:5, name: 'Krishna', email: 'krishnachaitanya.b@tavant.com', city: 'Bengaluru'},
  {id:6, name: 'Venkat', email: 'venkat@tavant.com', city: 'Bengaluru'},
  {id:7, name: 'Srinath', email: 'srinath.pb@tavant.com', city: 'Bengaluru'},
  {id:8, name: 'Pratapan', email: 'pratapan.ns@tavant.com', city: 'Bengaluru'},

]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userList);
});

router.get('/:id', function(req, res, next) {
  res.send(userList[parseInt(req.params.id-1)]);
});


module.exports = router;
