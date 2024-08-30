const fechaMiddleware = (req, res, next) => {
    const fechaHora = new Date().toLocaleString(); // Obtener la fecha y hora actual
    console.log(`[${fechaHora}] Ruta accedida: ${req.path}`); // Mostrar fecha y ruta
    next();
  };
  
  module.exports = fechaMiddleware;