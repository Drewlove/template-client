import { useEffect, useState } from "react";
import RecipeFormHeader from "../RecipeFormHeader/RecipeFormHeader";
import RecipeFormSection from "../RecipeFormSection/RecipeFormSection";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { useParams } from "react-router-dom";

function RecipeForm(props) {
  const [recipe, setRecipe] = useState({
    recipe_name: "",
    flour_total: "",
  });

  const [flours, setFlours] = useState([{ name: "", percent: "", id: "" }]);
  const [ingredients, setIngredients] = useState([
    { name: "", percent: "", id: "" },
  ]);

  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId !== "new") {
      const recipe = props.data[0];
      const { flours, ingredients } = recipe;
      setFlours(flours);
      setIngredients(ingredients);
      setRecipe({
        recipe_name: recipe.recipe_name,
        flour_total: recipe.flour_total,
      });
    } else {
      setFlours([{ name: "", percent: "", id: generateStringId() }]);
      setIngredients([{ name: "", percent: "", id: generateStringId() }]);
      setRecipe({ recipe_name: "", flour_total: "" });
    }
  }, [props.data, recipeId]);

  const handleChangeRecipe = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleChangeIngredient = (e, ingredientType) => {
    let nameArr = e.target.name.split("-");
    const propertyName = nameArr[0];
    const id = nameArr[1];
    if (ingredientType === "flour") updateFlour(e, propertyName, id);
    else if (ingredientType === "ingredient")
      updateIngredient(e, propertyName, id);
  };

  const updateIngredient = (e, propertyName, id) => {
    setIngredients(
      ingredients.map((key) => {
        return key.id === id ? { ...key, [propertyName]: e.target.value } : key;
      })
    );
  };

  const updateFlour = (e, propertyName, id) => {
    setFlours(
      flours.map((key) => {
        return key.id === id ? { ...key, [propertyName]: e.target.value } : key;
      })
    );
  };

  const handleSubtractClick = (e, id, ingredientType) => {
    e.preventDefault();
    if (ingredientType === "flour")
      setFlours(flours.filter((key) => key.id !== id));
    else if (ingredientType === "ingredient")
      setIngredients(ingredients.filter((key) => key.id !== id));
  };

  const handleClickAddIngredient = (e, ingredientType) => {
    e.preventDefault();
    if (ingredientType === "flour")
      setFlours([...flours, { name: "", percent: "", id: generateStringId() }]);
    else if (ingredientType === "ingredient")
      setIngredients([
        ...ingredients,
        { name: "", percent: "", id: generateStringId() },
      ]);
  };

  const generateStringId = () => {
    return Date.now().toString();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        handleDelete={handleDelete}
        endpointSuffix="recipes"
        recipeId={recipeId}
        redirectSuffix=""
      />
    );
  };

  return (
    <form>
      <RecipeFormHeader
        recipe={recipe}
        handleChangeRecipe={(e) => handleChangeRecipe(e)}
      />

      <hr />
      <RecipeFormSection
        sectionName="Flour"
        recipe={recipe}
        ingredients={flours}
        ingredientType="flour"
        handleClickAddIngredient={(e, ingredientType) =>
          handleClickAddIngredient(e, ingredientType)
        }
        handleChangeIngredient={(e, ingredientType) =>
          handleChangeIngredient(e, ingredientType)
        }
        handleSubtractClick={(e, id, ingredientType) =>
          handleSubtractClick(e, id, ingredientType)
        }
      />
      <RecipeFormSection
        sectionName="Ingredients"
        recipe={recipe}
        ingredients={ingredients}
        ingredientType="ingredient"
        handleClickAddIngredient={(e, ingredientType) =>
          handleClickAddIngredient(e, ingredientType)
        }
        handleChangeIngredient={(e, ingredientType) =>
          handleChangeIngredient(e, ingredientType)
        }
        handleSubtractClick={(e, id, ingredientType) =>
          handleSubtractClick(e, id, ingredientType)
        }
      />
      <section className="recipe__button-section">
        {recipeId !== "new" ? renderDeleteButton() : null}
        <FormSaveButton
          formData={{
            recipe_name: recipe.recipe_name,
            flour_total: recipe.flour_total,
            flours: flours,
            ingredients: ingredients,
          }}
          formName="recipe"
          endpointSuffix="recipes"
          redirectSuffix=""
          rowId={recipeId}
          // setFormError={setFormError}
        />
      </section>
    </form>
  );
}

export default RecipeForm;
