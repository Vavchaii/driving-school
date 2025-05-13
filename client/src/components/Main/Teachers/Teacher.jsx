import React from 'react'
import classes from './Teachers.module.css'

const Teacher = ({ teacher }) => {
  return (
    <div className={classes['teachers__presentation-teacher']}>
      <img src={teacher.img} alt="teacher"></img>
      <span className={classes['teachers__presentation-teacher-name']}>
        {teacher.name}
        <br></br>
        {teacher.job}
      </span>
    </div>
  )
}

export default Teacher
