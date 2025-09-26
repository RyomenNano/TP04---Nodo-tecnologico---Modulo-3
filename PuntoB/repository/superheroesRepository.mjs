import fs from 'fs'; // Módulo del sistema de archivos de Node.js
import path from 'path'; // Múdlo de manejo de rutas de archivos
import {fileURLToPath} from 'url'; // Obtiene la ruta del archivo actual
// Importamos la interfaz de persistencia
import SuperheroesDataSource from './superheroesDataSource.mjs';


// Obtener la ruta del archivo de tareas
const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);


export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor(){
        super();
        this.filePath= path.join(__dirname, '../superheroes.txt');
    }


    obtenerTodos(){
        const data= fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data); // Convierte el archivo JSON en un array de objetos JS
    }   
}
