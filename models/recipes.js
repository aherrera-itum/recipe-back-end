import { MongoClient, ServerApiVersion } from "mongodb"


const uri = 'mongodb+srv://root:Gpuq6AmcSbfHqXHg@cluster0.1ymo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const  client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function connect() {
    try{
        await client.connect()
        const db = client.db('RecipeDb2')
        return db.collection('recipe')
    }
    catch(error){
        console.log('Error',error)
    }
}

export class RecipeModel {

    static async getAll(){
        const db = await connect()
        return db.find({}).toArray()
    }

    static async create( { input }){
        const db = await connect()
        const { insertId } = await db.insertOne(input)
        return {
            _id: insertId,
            ...input
        }
    }

    static async cantidadDocumentos(){
        const db = await connect()
        return db.countDocuments()
    }

}