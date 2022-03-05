/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crearMascotas(req, res) {
    // Instanciaremos un nuevo mascota utilizando la clase mascota
    var mascota = new Mascota(req.body)
    res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
    // Simulando dos usuarios y respondiendolos
    var mascota1 = new Mascota(1, 'Patricia', 'Gato', 'https://images.app.goo.gl/gNWHWxetXYxFf6AM7', 'Mi mejor gato')
    var mascota2 = new Mascota(2, 'Monserrat', 'Vega', 'mon@vega.com')
    res.send([mascota1, mascota2])
}

function modificarMascotas(req, res) {
    // simulando un usuario previamente existente que el usuario utili
    var mascota1 = new Mascota(req.params.id, 'Patricia', 'Gato', 'https://images.app.goo.gl/gNWHWxetXYxFf6AM7', 'Mi mejor gato')
    var modificaciones = req.body
    mascota1 = {...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascotas(req, res) {
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

module.exports = {
    crearMascotas,
    obtenerMascotas,
    modificarMascotas,
    eliminarMascotas
}