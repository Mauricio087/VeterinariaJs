// Importa las funciones del archivo operaciones.js
const { registrar, leer } = require('./operaciones.js')

// Obtiene los argumentos de la línea de comandos, omitiendo los dos primeros
const argumentos = process.argv.slice(2)

// El primer argumento es la operación a realizar (registrar o leer)
const operacion = argumentos[0]

// Evalua la operación que se ejecutara
if (operacion === "registrar") {
    // Los siguientes argumentos son los datos de la cita
    const nombre = argumentos[1]
    const edad = argumentos[2]
    const tipo = argumentos[3]
    const color = argumentos[4]
    const enfermedad = argumentos[5]

    // Valida que se hayan proporcionado todos los argumentos para registrar
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log("Error: Faltan argumentos para registrar la cita.");
        console.log("Uso: node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>");
    } else {
        registrar(nombre, edad, tipo, color, enfermedad);
    }

} else if (operacion === "leer") {
    leer()

} else {
    console.log("Operación no reconocida.")
    console.log("Las operaciones disponibles son: 'registrar' y 'leer'")
    console.log("Ejemplo registrar: node index.js registrar Alfredo \"14 años\" perro blanco distemper")
    console.log("Ejemplo leer: node index.js leer")
}