import React, { useContext } from 'react'
import Recepie from './Recepie';
import { RecipeContext } from './App';

export default function ReceipeList({recipes}) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recepie key={recipe.id} {...recipe} />
          )
        })}
      </div>
      <div className="recipe-list__add-reipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}
