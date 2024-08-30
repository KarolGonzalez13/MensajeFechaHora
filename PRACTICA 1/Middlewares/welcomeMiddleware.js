const welcomeMiddleware = (req, res, next) => {
  console.log("¡Bienvenido a la aplicación!"); // Mensaje de bienvenida
  next();
};

module.exports = welcomeMiddleware;