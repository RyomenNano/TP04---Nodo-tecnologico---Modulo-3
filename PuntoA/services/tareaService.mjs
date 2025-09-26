// Importa la capa de persistencia
import TareaRepository from '../repository/tareaRepository.mjs';
import Tarea from '../models/tarea.mjs'

// Instancia el repositorio para menjar las tareas
const tareaRepo = new TareaRepository();

// Servicios para obtener todas las tareas
export function listarTareas(){
    // Obtiene todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas()
}


// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas(){
    // Obtiene todas las tareas desde la capa de persistencia
    const tareas= tareaRepo.obtenerTodas();
    // Filtrar las tareas completadas
    return tareas. filter(tarea=> tarea.completado);
}


// Servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado=false){
    // Obtiene todas las tareas
    const tareas= tareaRepo.obtenerTodas();
    // Crear una nueva instancia del modelo Tarea
    const nuevaTarea= new Tarea(id, titulo, descripcion, completado);
    // Validar que la tarea tenga un título válido
    nuevaTarea.validar();
    // Guardar la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}


// Servicio para marcar una tarea como completada
export function completarTarea(id){
    // Obtiene todas las tareas
    const tareas= tareaRepo.obtenerTodas();
    // Encuentra la tarea por ID
    const tarea = tareas.find(tarea => tarea.id === id);
    // Si la tarea existe, la marca como completada
    if (tarea){
        tarea.completar();
        // Guarda los cambios en el archivo
        tareaRepo.guardar(tareas);
    }
}


// Servicio para eliminar una tarea
export function eliminarTarea(id){
    // Obtiene todas las tareas
    let tareas= tareaRepo.obtenerTodas();
    // Elimina la tarea que coincida con el ID
    tareas= tareas.filter(tarea => tarea.id !==id);
    // Guarda la lista actualizada de tareas
    tareaRepo.guardar(tareas);
}


























