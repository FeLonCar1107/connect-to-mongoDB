const express = require('express')
const personSchema = require('../models/personModel.js')
const router = express.Router()

//Agregar una nueva persona
router.post('/person',(req,res)=>{
  const person = personSchema(req.body)
  person
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Listar las personas existentes en la BD
router.get('/people',(req,res)=>{
  personSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Consultar un recurso existente en la BD
router.get('/person/:id',(req,res)=>{
  const {id} = req.params
  personSchema
    .findById()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Actualizar un recurso específico de la BD
router.put('/person/:id',(req,res)=>{
  const {id} = req.params
  const {name,lastName,email,contact,profession} = req.body
  personSchema
    .updateOne({_id: id},{$set:{name, lastName, email, contact, profession}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//Eliminar un recurso específico de la BD
router.delete('/person/:id',(req,res)=>{
  const {id} = req.params
  personSchema
    .remove({ _id:id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports = router;