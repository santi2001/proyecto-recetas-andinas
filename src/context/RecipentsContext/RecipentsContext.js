import { createContext } from 'react'

export const RecipentsContext = createContext({
  recipents: [],
  setRecipents: () => {},
  updateRecipent: () => {},

  viewRecipents: [],
  loadRecipents: () => {},
  setViewRecipents: () => {},

  searchParams: {
    searchText: '',
    beforeCook: 'All'
  },
  setSearchParams: () => {}
})
