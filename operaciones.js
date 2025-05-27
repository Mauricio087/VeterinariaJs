const fs = require('fs')

// Nombre del archivo donde se guardaran las citas
const dataBase = 'citas.json'

// Con esta funcion se registra una nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    let citas = [];
    try {
        // Lee el archivo de citas existente
        const data = fs.readFileSync(dataBase, 'utf8');
        citas = JSON.parse(data);
    } catch (error) {

        console.warn(`Advertencia: ${dataBase} no se pudo leer o está vacío. De ser necesario, se creara uno nuevo.`);
    }

    // Crea el nuevo objeto de cita
    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        tipo: tipo,
        color: color,
        enfermedad: enfermedad
    };

    // Agrega una nueva cita al arreglo
    citas.push(nuevaCita);

    try {
        // Escribe el arreglo actualizado de citas de vuelta al archivo JSON
        fs.writeFileSync(dataBase, JSON.stringify(citas, null, 2));
        // Use null, 2 para formatear el JSON y hacerlo más legible, similar a Imagen del desafio.
        console.log("Cita registrada exitosamente.");
    } catch (error) {
        console.error("Error al guardar la cita:", error);
    }
};

// Función para leer y mostrar todas las citas
const leer = () => {
    try {
        // Lee el archivo de citas
        const data = fs.readFileSync(dataBase, 'utf8');
        const citas = JSON.parse(data);

        if (citas.length === 0) {
            console.log("No hay citas registradas.");
            return;
        }

        console.log("=== Citas Registradas ===");
        citas.forEach((cita, index) => {
            console.log(`\nCita ${index + 1}:`);
            console.log(`  Nombre: ${cita.nombre}`);
            console.log(`  Edad: ${cita.edad}`);
            console.log(`  Tipo: ${cita.tipo}`);
            console.log(`  Color: ${cita.color}`);
            console.log(`  Enfermedad: ${cita.enfermedad}`);
        });
        console.log("\n=========================");

    } catch (error) {
        // Si el archivo no existe o hay un error al leerlo
        if (error.code === 'ENOENT') { // ENOENT: Error NO ENTry (archivo no existe)
             console.log("No hay citas registradas (el archivo no se ha creado).");
        } else {
            console.error("Error al leer las citas:", error);
        }
    }
};

// Exporta las funciones para que puedan ser usadas en otros archivos
module.exports = { registrar, leer };