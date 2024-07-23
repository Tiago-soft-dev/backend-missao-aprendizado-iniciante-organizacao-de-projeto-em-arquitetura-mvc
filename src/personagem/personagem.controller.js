const { Collection } = require("mongodb")
const service = require('./personagem.service')

 async function readAll(req,res){
    const personagens =  await service.readAll()
    res.send(personagens)
}

async function readById(req,res){
    
}

function create(req,res){
    res.send('create')
}

function updateById(req,res){
    res.send('update by id')
}

function deleleById(req,res){
    res.send('delete by id')
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleleById
}