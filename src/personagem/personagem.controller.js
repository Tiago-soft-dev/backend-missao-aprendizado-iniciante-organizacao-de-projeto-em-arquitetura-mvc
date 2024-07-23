const { Collection } = require("mongodb")
const service = require('./personagem.service')

 async function readAll(req,res){
    const personagens =  await service.readAll()
    res.send(personagens)
}

async function readById(req,res){
    const id = req.params.id

    const personagem = await service.readById(id)

    if(!personagem){
        return res.status(404).send('personagem não encontrado')
    }
    res.send(personagem)
}

async function create(req,res){
    const novoPersonagem = req.body

    if(!novoPersonagem || !novoPersonagem.nome){
        return res.status(400).send('corpo da requisição inválido')
    }

    await service.create(novoPersonagem)
    res.status(201).send(novoPersonagem)
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