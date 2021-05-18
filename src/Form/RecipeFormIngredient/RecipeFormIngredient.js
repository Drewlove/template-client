import React from "react";
import RecipeFormIngredientName from "../RecipeFormIngredientName/RecipeFormIngredientName";
import RecipeFormIngredientPercent from "../RecipeFormIngredientPercent/RecipeFormIngredientPercent";

function RecipeFormIngredient(props) {
  const renderSubtractButton = () => {
    return (
      <button
        onClick={(e) => props.handleSubtractClick(e)}
        className="recipe__button_delete"
      >
        -
      </button>
    );
  };

  const getWeight = () => {
    let weight = props.flourTotal * (props.ingredientPercentValue / 100);
    weight = isNaN(weight) || !isFinite(weight) ? "" : weight.toFixed(1);

    return (
      <p className="recipe-ingredient-container__calc-weight-value">
        {weight} g
      </p>
    );
  };

  return (
    <>
      <div className="recipe-ingredient-container">
        <RecipeFormIngredientName
          inputName={`name-${props.id}`}
          ingredientTextValue={props.ingredientTextValue}
          handleChangeIngredient={(e) => props.handleChangeIngredient(e)}
        />
        <div className="recipe-ingredient-percent-wt-btn-container">
          <RecipeFormIngredientPercent
            inputName={`percent-${props.id}`}
            ingredientPercentValue={props.ingredientPercentValue}
            handleChangeIngredient={(e) => props.handleChangeIngredient(e)}
          />

          <div className="recipe-ingredient-container__calc-weight-div">
            {getWeight()}
          </div>
          <div>{renderSubtractButton()}</div>
        </div>
      </div>
    </>
  );
}

export default RecipeFormIngredient;
