// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');


// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(cors());


// Usuarios para simular la autenticación
const usuarios = [
  { email: 'sehent@hotmail.com', password: '2', accessToken: 'token_sehent', refreshToken: 'refresh_sehent' },
  { email: 'GerLauff@hotmail.com', password: '7654321', accessToken: 'token_GerLauff', refreshToken: 'refresh_GerLauff' },
  { email: 'MatiasSaes@hotmail.com', password: '246810', accessToken: 'token_Matias', refreshToken: 'refresh_Matias' },
  { email: 'AlejoPaez@hotmail.com', password: '223344', accessToken: 'token_AlexPaez', refreshToken: 'refresh_alxander' },
];

// Ruta para manejar solicitudes POST de autenticación
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si el formato de correo electrónico es válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(401).json({
      errors: [{
        message: '"email" must be a valid email',
        extensions: { code: 'INVALID_PAYLOAD' }
      }]
    });
  }

  // Buscar el usuario por correo electrónico
  const usuario = usuarios.find(u => u.email === email);

  // Verificar si el usuario existe y la contraseña es correcta
  if (!usuario || usuario.password !== password) {
    return res.status(401).json({
      errors: [{
        message: '"email" invalid user credentials',
        extensions: { code: 'INVALID_PAYLOAD' }
      }]
    });
  }

  // Generar tokens de acceso y refresco
  const accessToken = usuario.accessToken;
  const refreshToken = usuario.refreshToken;

  // Devolver tokens de acceso y refresco
  res.json({
    data: {
      access_token: accessToken,
      expires: 900000,
      refresh_token: refreshToken
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
