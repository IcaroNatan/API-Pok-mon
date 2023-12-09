const express = require("express");
const { detalhesPokemon } = require("./controlador/pokedex")

const rotas = express();

rotas.use(express.json());

rotas.get("/pokedex/:parametro", detalhesPokemon);

module.exports = rotas;