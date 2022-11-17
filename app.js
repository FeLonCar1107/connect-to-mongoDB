const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const { API_VERSION } = require("./config");

const userRoutes = require("./src/routes/userRoutes")
const moviesRoutes = require("./src/routes/movieRoutes")

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Evitar el bloqueo al CORS
app.use(cors());

app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, moviesRoutes);

/* Configuración de los header HTTP */
module.exports = app;