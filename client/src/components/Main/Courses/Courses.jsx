import React from 'react'
import { coursesList } from '../../../data/coursesList'
import Course from './Course'
import Button from '../../../UI/Button/Button'
import classes from './Courses.module.css'

const Courses = () => {
  return (
    <section className={classes.courses}>
      <div className="container">
        <h2 className={classes.courses__title}>Популярные курсы</h2>
        <div className={classes.courses__group}>
          {coursesList.map((course, index) => (
            <Course course={course} key={index} />
          ))}
        </div>
        <div className={classes.center}>
          <Button backgroundColor="#10b582">Все курсы</Button>
        </div>
      </div>
    </section>
  )
}

export default Courses
