import { Router } from "express";
const router = Router();



//3.BOTON "crear usuario"
//router.get('/registro', (req,res) => {
    //res.send("Aqui se mostrara el formulario para crear un nuevo usuario.");
//});

//4.ENLACE PARA "RESTABLECER CONTRASEÑA"
router.get('/recuperar-password', (req,res) => {
    res.send("Vista o logica para enviar el correo de recuperacion de contraseña.");
});

//5.ENLACE PARA "RECORDAR USUARIO"
router.get('/recordar-usuario', (req,res) => {
    res.send("Vista o logica para recordar el nombre del usuario.");
});

//RUTA DE EJEMPLO PARA EL EXITO DEL LOGIN
router.get('/dashboard', (req,res) => {
    res.send("¡Bienvenido al sistema!");
});

export default router; 