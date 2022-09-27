import React from 'react'
import foodImg from 'assets/img/aside-food.jpg'
import { MainLayout, NavBar } from 'shared'

import { RecipeDrawer } from './components/RecipeDrawer'
import { RecipeBoard } from './components'
import useStyles from './HomePage.style'

const HomePage = () => {
  const classes = useStyles()

  return (
    <MainLayout>
      <NavBar />
      <RecipeDrawer />
      <div className={classes.bodyContainer}>
        <aside className={classes.aside}>
          <div style={{ backgroundImage: `url(${foodImg})` }} className={classes.asideImg} />
        </aside>
        <RecipeBoard />
      </div>
    </MainLayout>
  )
}

export default HomePage
