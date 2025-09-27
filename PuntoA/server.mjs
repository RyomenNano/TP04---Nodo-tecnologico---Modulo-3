import express from 'express';
// Importamos los controladores
import { listarTareasController,
    listarTareasCompletadasController,
    crearTareaController,
    completarTareaController,
    eliminarTareaController} from './controllers/tareaController.mjs'


const app= express(); // Inicializar la app de Express
const PORT= 3000; // Definir el puerto en el qeu escuchará el servidor

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

// Rutas
    // Ruta para obtener todas las tareas
app.get('/tareas', listarTareasController);
    // Ruta para obtener todas las tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);
    // Ruta para crear nueva tarea
app.post('/tarea', crearTareaController);
    // Ruta para marcar como tarea completada
app.put('/tareas/:id/completar', completarTareaController);
    // Ruta para eliminar tarea
app.get('/tareas/:id', eliminarTareaController);

// Iniciar el server
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})


