import { createContext } from 'react'

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
