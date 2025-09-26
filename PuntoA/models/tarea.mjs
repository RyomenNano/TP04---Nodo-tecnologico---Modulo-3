export default class Tarea {
    constructor(id, titulo, descripcion, completado=false){
        this.id= id;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.completado=completado;
    }
// Método para marcar una tarea como completada
    completar(){
        this.completado = true;
    }
// Método pra validar que el título de la tarea no esté vacio
    validar(){
        if(!this.titulo || this.titulo.trim() === ''){
            throw new Error('El titulo de la tarea es obligatorio.')
        }
    }
}

