import UsuarioController from '../controllers/UsuarioController';
var express = require('express');
var router = express.Router();

/* GET lista de usuários. */
router.get('/', UsuarioController.findAll());
router.post('/', UsuarioController.insert());
router.put('/:id', UsuarioController.update());
router.get('/:id', UsuarioController.find());
router.delete('/:id', UsuarioController.delete());

export default router;