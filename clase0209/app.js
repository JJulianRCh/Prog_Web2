let tareas = [];

function mostrarOpciones() {
    return parseInt(prompt(`
        Opciones Disponibles
        1.= Agregar Tarea
        2.- Ver todas las Tareas
        3.- Marcar mis tareas como completads
        4.- Salir
        `));
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarOpciones();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                console.log("Opcion 3 elegida");
                break;
            case 4:
                alert("Saliendo...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
    alert("Programa finalizado");
}

function agregarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    } else {
        alert("El nombre de la tarea no puede estar vacia");
    }
}

function verTareas() {
    for (let tarea of tareas) {
        let msj = tarea.nombre + ", estado: " + ((tarea.completada) ? "Completa" : "Incompleta");
        console.clear();
        console.log(msj);
    }
}
