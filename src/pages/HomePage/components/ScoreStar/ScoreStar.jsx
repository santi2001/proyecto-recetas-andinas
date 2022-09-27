import React, { Fragment } from 'react'
import { Star as StarIcon, StarOutline as StarOutlineIcon } from '@material-ui/icons'

import { useStyles } from './ScoreStar.style'

const ScoreStar = ({ score }) => {
  const starList = [false, false, false, false].map((_, index) => index + 1 <= score)
  const classes = useStyles()

  return (
    <>
      {starList.map((x, index) => (
        <Fragment key={index}>
          {x ? (
            <StarIcon className={classes.starIcon} />
          ) : (
            <StarOutlineIcon className={classes.starIcon} />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default ScoreStar
