import { RecipeModel } from "../models/recipes.js"


export class RecipeController {
    static async getAll(req, res){
        const rec = await RecipeModel.getAll()
        res.json(rec)
    }

    static async create(req, res){
        const cantidad = await RecipeModel.cantidadDocumentos()
        const data = { 'id':cantidad+1, ...req.body}
        const newRecipe = await RecipeModel.create( { input:data } )
        res.status(201).json(newRecipe)
    }
}