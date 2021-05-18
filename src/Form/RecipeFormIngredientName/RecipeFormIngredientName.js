import React from "react";

function RecipeFormIngredientName(props) {
  return (
    <div className="recipe-ingredient-name-container">
      <input
        className="recipe-ingredient__input recipe-ingredient__input_name"
        type="text"
        placeholder="Ingredient"
        name={props.inputName}
        value={props.ingredientTextValue}
        onChange={(e) => props.handleChangeIngredient(e)}
      />
    </div>
  );
}

export default RecipeFormIngredientName;
