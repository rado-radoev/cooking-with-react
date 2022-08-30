import React from 'react'
import Recepie from './Recepie';

export default function ReceipeList(props) {
  const {
    recipes,
    handleRecipeAdd,
    handleRecipeDelete
  } =  props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recepie
              key={recipe.id}
              handleRecipeDelete={handleRecipeDelete}
              {...recipe}
            />
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
