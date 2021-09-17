let archivoTareas = require('./tareas');

let accion = process.argv;

switch(accion[2]) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach(function(tarea) { console.log(tarea);});
        break;

    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2

    case "crear":
        let  tarea={
            titulo : accion[3],
            estado : "Pendiente"
        };
        archivoTareas.guardarTarea(tarea);
    break;

    case "filtrar" :
        console.log("Buscando tareas "+ accion[3])
        let estado=accion[3];
        let filtrados=archivoTareas.leerPorEstado(estado);
        if (filtrados.length==0)
        console.log("No hay tareas "+accion[3]);
        else{
        console.log("Tareas: ")
        filtrados.forEach(function(filtrado) { console.log(filtrado);});}

    break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtar');
        break;
}