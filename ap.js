// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_S5QNvA4-OiCedFql4jZf7_OG8-mpEsI",
  authDomain: "prueba-3affd.firebaseapp.com",
  databaseURL: "https://prueba-3affd-default-rtdb.firebaseio.com",
  projectId: "prueba-3affd",
  storageBucket: "prueba-3affd.appspot.com",
  messagingSenderId: "452950754385",
  appId: "1:452950754385:web:a63105e92190fe7838a470",
  measurementId: "G-TVEVQ5P86D"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Obtener referencia a la colección "usuarios"
const usuariosRef = database.ref('usuarios');

// Capturar el formulario de registro
const registroForm = document.getElementById('registroForm');
const mensajeDiv = document.getElementById('mensaje');

// Manejar el evento de envío del formulario
registroForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevenir el envío por defecto del formulario
  
  // Obtener los valores del formulario
  const nombre = registroForm.nombre.value;
  const apellido = registroForm.apellido.value;

  // Validar que los campos no estén vacíos
  if (nombre === '' || apellido === '') {
    mensajeDiv.innerText = 'Por favor completa todos los campos.';
    return;
  }

  // Crear un nuevo objeto con los datos del usuario
  const nuevoUsuario = {
    nombre: nombre,
    apellido: apellido
  };

  // Enviar los datos a Firebase
  usuariosRef.push().set(nuevoUsuario)
    .then(() => {
      mensajeDiv.innerText = 'Registro exitoso!';
      registroForm.reset(); // Limpiar el formulario después de registrar
    })
    .catch(error => {
      console.error('Error al registrar usuario:', error);
      mensajeDiv.innerText = 'Ocurrió un error, por favor intenta nuevamente.';
    });
});
