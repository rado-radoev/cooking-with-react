import React from "react";
import ReceipeList from "./ReceipeList";

function App() {
  return (
    <ReceipeList recipes={sampleRecepies}/>
  )
}

const sampleRecepies = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: `
      1. Put salt on chicken\n
      2 .Put chicken in oven\n
      3. Each chicken
    `
  },
  {
    id: 2,
    name: 'Plain pork',
    servings: 3,
    cookTime: '0:45',
    instructions: `
      1. Put paprika on pork\n
      2 .Put pork in oven\n
      3. Each pork
    `
  },
]

export default App;
