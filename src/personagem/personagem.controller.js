function readAll(req,res){
    res.send('readAll')
}

function readById(req,res){
    res.send('read by id')
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