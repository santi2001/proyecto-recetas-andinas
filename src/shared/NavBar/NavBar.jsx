import React from 'react'
import nubimetricsLogo from 'assets/img/logo.jpg'

import useStyles from './NavBar.style'

const NavBar = () => {
  const classes = useStyles()

  return (
    <header className={classes.headerContainer}>
      <div style={{ backgroundImage: `url(${nubimetricsLogo})` }} className={classes.imgLogo} />
    </header>
  )
}

export default NavBar
