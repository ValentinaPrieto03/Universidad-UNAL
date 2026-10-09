import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexroutes from './routes/index.js'
import authRoutes from './routes/autenticacion.js'


const app = express()
const PORT = 3000

//RUTA ABSOLUTA
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, '/views'))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares para leer datos del formulario
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//RUTA PARA LLAMAR LA APLICACION
app.use(indexroutes)
app.use(authRoutes)

//RUTA DE LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS(CSS,IMG,VIDEO)
app.use(express.static(join(__dirname,'/public')))

//RUTA PARA INICIAR EL SERVIDOR CON SU RESPECTIVO PUERTO
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

