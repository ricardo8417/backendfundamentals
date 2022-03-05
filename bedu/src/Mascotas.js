/** Clase que representa un animalito a adoptar */
class Mascota {
    constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion) {
        this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
        this.categoria = categoria; // perro | gato | otro
        this.fotos = fotos; // links a las fotografías
        this.descripcion = descripcion; // descripción del anuncio
        this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
        this.ubicacion = ubicacion; // muy importante
    }
    guardar() {
        // función para guardar un nuevo registro en la base de datos.
    }
}

class UsuarioAdoptante {

    constructor(id, nombre, ingreso, date_deleted, edad, domicilio, mascota) {
        this.nombre = nombre;
        this.ingreso = ingreso;
    }
}

class UsuarioAnunciate {
    constructor(nombre, mascotas, historial, fechaDeAnuncio) {
        this.nombre = nombre;
    }
}