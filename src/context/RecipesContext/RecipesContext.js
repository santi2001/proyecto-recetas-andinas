import { createContext } from 'react'

// Creación, definición y estado inicial de la aplicación
export const RecipesContext = createContext({
  recipes: [],
  setRecipes: () => {},
  updateRecipe: () => {},

  viewRecipes: [],
  loadRecipes: () => {},
  setViewRecipes: () => {},

  searchParams: {
    searchText: '',
    beforeCook: 'All'
  },
  setSearchParams: () => {}
})
