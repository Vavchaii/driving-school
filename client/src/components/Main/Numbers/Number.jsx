import React from 'react'
import classes from './Numbers.module.css'

const Number = ({ number }) => {
  return (
    <div className={classes['numbers__items-item']}>
      <span className={classes['numbers__items-item-number']}>
        {number.hours}
      </span>
      <p className={classes['numbers__items-item-text']}>{number.text}</p>
    </div>
  )
}

export default Number
