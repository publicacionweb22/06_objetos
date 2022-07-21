// Objetos y clases en JavaScript

// A la hora de generar o instanciar objetos en JavaScript tenemos dos opciones
// 1.- Opción. Un literal de objeto ("manual o clásica")

// La sintaxis de literales de objetos utiliza llaves y pares propiedad valor separados por dos
// puntos (:) y comas (,)

var jugador1 = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Do Santos Aveiros',
    goles: 0
}

// Acceso a las propiedades del objeto
// Sintaxis de la notación del punto tanto para leer (get) como para escribir (set)

console.log(jugador1.apellidos); // Accedo a la lectura de esa propiedad

jugador1.goles = 1; // Accedo a la escritura de esa propiedad

console.log(jugador1.goles);

// 2.- Opción. Utilizando clases ("académica") disponibles desde ECMA 6 (2015)
// Las clases son unos bloques de código donde definimos las
// propiedades y métodos que tendrán un conjunto de objetos ("moldes")
// Sintaxis que usa la palabra reservada class y define dentro las propiedades y métodos

class Jugador {
    nombre;
    apellidos;
    goles;

    // Método constructor
    constructor(nombreIn, apellidosIn, golesIn) {
        this.nombre = nombreIn;
        this.apellidos = apellidosIn;
        this.goles = golesIn;
    }

    // Métodos setters y getters

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    
    // Resto de getters y setters para goles;

}

// Para instanciar (generar) objetos de una clase usamos la palabra new y el nombre
// de la clase

var jugador2 = new Jugador('Lionel','Messi',0) // Esto invoca o ejecuta el constructor de esa clase

console.log(jugador2);

// Para acceder a las propiedades deberíamos usar sus getters y setters

jugador2.setNombre('Lionel Jesús'); // Cambiará la propiedad nombre con ese valor

console.log(jugador2.getNombre() + ' ' + jugador2.getApellidos());

// La ventaja de usar Clases es que podemos generar muchos objetos y todos tendrán
// las mismas propiedades

var jugador3 = new Jugador('Karem','Benzema',0);

console.log(jugador3);

// Alternativas menos usadas o usadas antes de ECMAScript 6 cuando no había clases
// Factory functions

function Jugador(nombreIn, apellidosIn, golesIn) {
    return {
        nombre: nombreIn,
        apellidos: apellidosIn,
        goles: golesIn
    }
}

var jugador4 = Jugador('Sergio','Ramos', 0);


