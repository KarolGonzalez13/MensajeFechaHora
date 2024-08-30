const express = require("express");
const router = express.Router();

// Importar middlewares
const welcomeMiddleware = require("../Middlewares/welcomeMiddleware");
const fechaMiddleware = require("../Middlewares/fechaMiddleware");


router.get("/home",welcomeMiddleware,fechaMiddleware, (req, res) => {
  res.send("Hola, estás en la página de inicio CASA");
});

router.get("/about",welcomeMiddleware,fechaMiddleware, (req, res) => {
  res.send("Hola, estás en la página de Karol!");

});

module.exports = router;