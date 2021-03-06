import React from 'react';
import uuid from 'uuid/v4';

export const RecipeCard = ({ tacoRecipe, styleName, listStyleName }) => {
  const splitRecipe = tacoRecipe.recipe.split('\n');
  const jsxRecipeItems = splitRecipe.map(step => {
    if (!step.includes('=')) {
      return (
        <li key={uuid()}>
          {step}
        </li>
    )}
  });
  return (
    <div className={`recipeCard ${styleName}`}>
      <h3>{tacoRecipe.name}</h3>
        <ul className={`recipeList ${listStyleName}`}>
          {jsxRecipeItems}
        </ul>
    </div>
  );
};

export default RecipeCard;