import { Router } from 'express';

const router = Router();

router.get('/contactos', (req, res) => res.render('contactos', { etiqueta: 'Pagina de Contactos' }));
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros'));
router.get('/menu', (req, res) => res.render('menu'));
router.get('/', (req, res) => res.render('index', { etiqueta: 'Mi primer sitio web con Node-js' }));

// Muestra el formulario de registro 
router.get('/registro', (req, res) => {
    res.render('registro', {
        etiqueta: 'Aquí se mostrará el formulario para crear un nuevo usuario.',
        error: null
    });
});

// Ruta GET para el login
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'Vista de Inicio de Sesion',
        mensaje: null
    });
});

// RUTA POST PARA PROCESAR EL LOGIN
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');
    }
    return res.render('login', {
        etiqueta: 'Vista de Inicio de sesion',
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

// RUTA POST PARA RECIBIR LOS DATOS DE REGISTRO
router.post('/registro', async (req, res) => {
    try {
        const {
            tipoDocumento,
            numeroDocumento,
            segundoNombre,
            otrosNombres,
            primerApellido,
            segundoApellido, 
            fechaNacimiento,
            correo,
            confirmarCorreo
        } = req.body; 

        // Validar que los correos coincidan
        if (correo !== confirmarCorreo) {
            return res.render('registro', { 
                etiqueta: 'Aquí se mostrará el formulario para crear un nuevo usuario.', 
                error: 'Los correos electrónicos no coinciden.' 
            });
        }

        // TODO: Aquí guardas el usuario en tu base de datos (MySQL, SQLite, etc.)
        console.log("Datos del usuario a guardar:", req.body);

        // Redirigir al login
        res.redirect('/login');

    } catch (error) { // <-- Se estructuró correctamente el bloque try-catch
        console.error(error);
        res.render('registro', { 
            etiqueta: 'Aquí se mostrará el formulario para crear un nuevo usuario.', 
            error: 'Hubo un error al registrar el usuario.' 
        });
    }
});

export default router;


