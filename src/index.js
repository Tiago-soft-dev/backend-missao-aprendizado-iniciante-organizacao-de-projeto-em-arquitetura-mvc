require('dotenv').config()
const express=require('express')
//const { MongoClient, ObjectId } = require('mongodb')
const { connectToDataBase } = require('./db/database-connection')



async function main(){
// FIX: utilizar o connectToDataBase e receber o BD
await connectToDataBase()

//const collection = db.collection('personagem')

const app=express()

//middlewares
app.use(express.json()) //express usando json


/*
//endpoint read all get
app.get('/personagem', async (req,res)=>{
    const itens = await collection.find().toArray()
    res.send(itens)
})

//endpoint /personagem/count
app.get('/personagem/count', (req,res)=>{
    const totalItens = lista.length
    res.send(`Número total de itens: ${totalItens}`)
})

//endpoint read by id get
app.get('/personagem/:id', async (req,res)=>{
    let id = req.params.id
    const item = await collection.findOne({_id: new ObjectId(id)})
    if(!item){
        return res.status(404).send('Item não encontrado.')
    }
    res.send(item);
})

//endpoint create post
app.post('/personagem', async (req,res)=>{
    const novoItem = req.body
    
    if(!novoItem || !novoItem.nome){
        return res.status(400).send('Corpo da requisição inválido')
    }

    // if(lista.includes(novoItem)){
    //     return res.status(409).send('Item já existe na lista')
    // }
    
    await collection.insertOne(novoItem)

    
    res.status(201).send(novoItem)
})

//endpoint update put
app.put('/personagem/:id', async (req,res)=>{
    const id = req.params.id
    const novoItem = req.body
    
    const item = await collection.findOne({_id: new ObjectId(id)})
    
    if(!item){
        return res.send('Item não encontrado')
    }

    if(!novoItem || !novoItem.nome){
        return res.status(400).send('Corpo da requisição inválido')
    }

    await collection.updateOne(
        {_id: new ObjectId(id)},
        {$set: novoItem}
    )

    res.send(novoItem)
})

//endpoint delete
app.delete('/personagem/:id', async (req,res)=>{
    const id = req.params.id 
    await collection.deleteOne({_id: new ObjectId(id)})
    res.send('Item deletado com sucesso! ')
})
*/
app.listen(3000, ()=>console.log('servidor online'))
}
main()