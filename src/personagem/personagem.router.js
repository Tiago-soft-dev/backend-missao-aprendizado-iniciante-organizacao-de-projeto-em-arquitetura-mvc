const express=require('express')
const { readAll, readById, create, updateById, deleleById } = require('./personagem.controller')
const router = express.Router()

function teste(req,res){
    res.send('ok')
}

router.get('/', readAll)
router.get('/:id', readById)
router.post('/', create)
router.put('/:id', updateById)
router.delete('/:id', deleleById)

module.exports = router