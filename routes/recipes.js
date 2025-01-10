
import { Router } from "express"
import { RecipeController } from "../controller/recipes.js"

const router = Router()

router.get('/', RecipeController.getAll)
router.post('/', RecipeController.create)

export default router


