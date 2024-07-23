const { MongoClient } = require("mongodb");

//dados de configuracao do servidor
const dbUrl = process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME

async function connectToDataBase(){
    //conexao do servidor    
const client = new MongoClient(dbUrl)
console.log('Conectando ao BD');
await client.connect()
console.log('BD conectado');
const db = client.db(dbName)
}

module.exports = {
    connectToDataBase
}