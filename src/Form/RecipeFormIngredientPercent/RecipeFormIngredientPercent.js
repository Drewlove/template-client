import React from "react";

function RecipeFormIngredientPercent(props) {
  return (
    <div className="recipe__input-percent-container">
      <input
        className="recipe-ingredient__input_percent"
        type="number"
        name={props.inputName}
        value={props.ingredientPercentValue}
        onChange={(e) => props.handleChangeIngredient(e)}
      />
      <p className="recipe__input_percent-text">%</p>
    </div>
  );
}

export default RecipeFormIngredientPercent;
