import React, { useState } from 'react'
import { RecipentsContext } from 'context'
import { HomePage } from 'pages/HomePage'
import { recipents as recipentList } from 'utils'

export const App = () => {
  const [recipents, setRecipents] = useState(recipentList)
  const [searchParams, setSearchParams] = useState({ searchText: '', beforeCook: 'All' })
  const [viewRecipents, setViewRecipents] = useState([])

  const updateRecipent = (recipent) => {
    const index = recipents.findIndex((x) => x.id === recipent.id)
    recipents[index] = { ...recipent }
    setRecipents([...recipents])
  }

  const loadRecipents = (params) => {
    const RECIPENTS_ALL = 'All'
    const { searchText, beforeCook } = params

    const recipentsFilter = recipents
      .filter((x) => x.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
      .filter((x) => beforeCook === RECIPENTS_ALL || x.beforeCook === beforeCook)

    return recipentsFilter
  }

  return (
    <RecipentsContext.Provider
      value={{
        recipents,
        setRecipents,
        searchParams,
        viewRecipents,
        setSearchParams,
        setViewRecipents,
        loadRecipents,
        updateRecipent
      }}>
      <HomePage />
    </RecipentsContext.Provider>
  )
}

export default App
