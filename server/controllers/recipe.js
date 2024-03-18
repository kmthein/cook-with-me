const Recipe = require("../models/recipe");

exports.getAllRecipes = async (req, res) => {
    try {
        const recipesDoc = await Recipe.find();
        if(!recipesDoc) {
            throw new Error("Recipes not found.");
        }
        return res.json({
            success: true,
            recipes: recipesDoc
        })
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: error.message
        })        
    }
}

exports.getRecipeDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const recipeDoc = await Recipe.findById(id);
        if(!recipeDoc) {
            throw new Error("Recipe not found.");
        }
        return res.json({
            success: true,
            recipe: recipeDoc
        })
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: error.message
        }) 
    }
}
