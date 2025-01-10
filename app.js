import express, { json } from "express"
import cors from "cors"
import recipeRouter from './routes/recipes.js'

const port = 5000
const app = express()

app.use(json())
app.use(cors())
app.use('/recipes', recipeRouter)



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})
