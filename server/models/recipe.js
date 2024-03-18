const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Ingredients: {
        type: String,
        required: true
    },
    CookingInstructions : {
        type: String,
        required: true
    },
    UserType: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    Image: {
        type: String,
        default: ""
    }

}, {
    timestamps: true
});

const recipeModel = model("Recipe", recipeSchema);

module.exports = recipeModel;