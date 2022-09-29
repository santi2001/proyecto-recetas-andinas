import React, { useState } from 'react'
import { RecipesContext } from 'context'
import { HomePage } from 'pages'
import { recipes as recipeList } from 'utils'

export const App = () => {
  const [recipes, setRecipes] = useState(recipeList)
  const [viewRecipes, setViewRecipes] = useState([])
  const [searchParams, setSearchParams] = useState({ searchText: '', beforeCook: 'All' })

  // Permite actualizar una receta
  const updateRecipe = (recipent) => {
    const index = recipes.findIndex((x) => x.id === recipent.id)
    recipes[index] = { ...recipent }
    setRecipes([...recipes])
  }

  // Carga las recetas aplicando los parametros de busqueda y/o filtros activos
  const loadRecipes = (params) => {
    const DEFAULT_STATE = 'All'
    const { searchText, beforeCook } = params

    const recipesFilter = recipes
      .filter((x) => x.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
      .filter((x) => beforeCook === DEFAULT_STATE || x.beforeCook === beforeCook)

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
