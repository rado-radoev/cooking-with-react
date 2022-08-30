import React, {useState, useId} from "react";
import ReceipeList from "./ReceipeList";
import '../css/app.css';

function App() {
  const id = useId();
  const [recipe, setRecipe] = useState(sampleRecepies);

  function handleRecipeAdd() {
    const newRecipe = {
      id,
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: '1. Instructions, 2. Instructions',
      ingredients: [
        {
          id,
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    setRecipe([...recipe, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipe(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id))
  }

  return (
    <ReceipeList
      recipes={recipe}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  )
}


const sampleRecepies = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Each chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain pork',
    servings: 3,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Each pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
]

export default App;
