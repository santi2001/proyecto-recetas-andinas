import React, { useState } from 'react'
import { RecipesContext } from 'context'
import { HomePage } from 'pages/HomePage'
import { recipes as recipeList } from 'utils'

export const App = () => {
  const [recipes, setRecipes] = useState(recipeList)
  const [viewRecipes, setViewRecipes] = useState([])
  const [searchParams, setSearchParams] = useState({ searchText: '', beforeCook: 'All' })

  const updateRecipe = (recipent) => {
    const index = recipes.findIndex((x) => x.id === recipent.id)
    recipes[index] = { ...recipent }
    setRecipes([...recipes])
  }

  const loadRecipes = (params) => {
    const RECIPENTS_ALL = 'All'
    const { searchText, beforeCook } = params

    const recipesFilter = recipes
      .filter((x) => x.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
      .filter((x) => beforeCook === RECIPENTS_ALL || x.beforeCook === beforeCook)

    return recipesFilter
  }

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        searchParams,
        setSearchParams,
        viewRecipes,
        setViewRecipes,
        loadRecipes,
        updateRecipe
      }}>
      <HomePage />
    </RecipesContext.Provider>
  )
}

export default App
