const { getDatabase } = require("../db/database-connection")

function getCollection(){
    return getDatabase().collection('personagem')
}

function readAll(){
    return getCollection().find().toArray()
}

async function readById(){
}

function create(){
}

function updateById(){
}

function deleleById(){
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleleById
}