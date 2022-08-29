import React from 'react'
import Recepie from './Recepie';

export default function ReceipeList({ recipes }) {
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <Recepie
            key={recipe.id}
            {...recipe}
          />
        )
      })}
    </div>
  )
}
