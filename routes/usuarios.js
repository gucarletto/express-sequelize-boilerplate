var express = require('express');
var router = express.Router();

/* GET lista de usuários. */
router.get('/', function(req, res, next) {
  res.send('caiu no rota do usuario');
});

module.exports = router;