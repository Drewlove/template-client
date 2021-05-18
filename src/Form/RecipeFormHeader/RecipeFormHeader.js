import React from "react";

function RecipeFormHeader(props) {
  return (
    <header className="recipe-header">
      <div className="recipe-container">
        <legend className="recipe-container__legend">Name</legend>
        <input
          className="recipe__input_heading"
          type="text"
          placeholder="Recipe Name"
          value={props.recipe.recipe_name}
          name="recipe_name"
          onChange={(e) => props.handleChangeRecipe(e)}
        />
      </div>
      <div className="recipe-container">
        <legend className="recipe-container__legend">Total Flour (g)</legend>
        <input
          className="recipe__input_heading"
          type="number"
          placeholder="0"
          value={props.recipe.flour_total}
          name="flour_total"
          onChange={(e) => props.handleChangeRecipe(e)}
        />
      </div>
    </header>
  );
}

export default RecipeFormHeader;
