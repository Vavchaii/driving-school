import React from 'react'
import Number from './Number'
import classes from './Numbers.module.css'
import {numbers} from '../../../data/data'

const Numbers = () => {
  return (
    <section className={classes.numbers}>
      <div className="container">
        <div className={classes.numbers__items}>
          {numbers.map((number, index) => (
            <Number number={number} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Numbers
