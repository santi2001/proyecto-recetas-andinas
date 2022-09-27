import React from 'react'

import useStyles from './MainLayout.style'

const MainLayout = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}

export default MainLayout
