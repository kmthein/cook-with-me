const router = require("express").Router();

const recipeController = require("../controllers/recipe");

router.get("/recipes", recipeController.getAllRecipes);

router.get("/recipes/:id", recipeController.getRecipeDetail);

module.exports = router;