// Estructura del CRUD
const router = require('express').Router();
const {
    crearMascotas,
    obtenerMascotas,
    modificarMascotas,
    eliminarMascotas
} = require('../controllers/mascotas')

router.get('/', obtenerMascotas)
router.post('/', crearMascotas)
router.put('/:id', modificarMascotas)
router.delete('/:id', eliminarMascotas)

module.exports = router;