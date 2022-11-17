const express = require('express')
const movieSchema = require('../models/movieModel')
const router = express.Router()

//Agregar una nueva pelicula
router.post('/movies',(req,res)=>{
  const movie = movieSchema(req.body)
  movie
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Listar las peliculas existentes en la BD
router.get('/movies',(req,res)=>{
  movieSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Consultar un recurso existente en la BD
router.get('/movies/:id',(req,res)=>{
  const {id} = req.params
  movieSchema
    .findById()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Actualizar un recurso específico de la BD
router.put('/movies/:id',(req,res)=>{
  const {id} = req.params
  const {name, type, year} = req.body
  movieSchema
    .updateOne({_id: id},{$set:{name, type, year}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Eliminar un recurso específico de la BD
router.delete('/movies/:id',(req,res)=>{
  const {id} = req.params
  movieSchema
    .remove({ _id:id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports = router;