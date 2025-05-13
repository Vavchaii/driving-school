import React from 'react'
import classes from './Courses.module.css'

const Course = ({course}) => {
  return (
    <div className={classes['courses__group-item']}>
      <img src={course.img} alt="courses"></img>
      <span className={classes['courses__group-item-text']}>Motion design</span>
    </div>
  )
}

export default Course
