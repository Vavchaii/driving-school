import React from 'react'
import classes from './Teachers.module.css'
import { teachersList } from '../../../data/teachersList'
import Teacher from './Teacher'
import Button from '../../../UI/Button/Button'

const Teachers = () => {
  return (
    <section className={classes.teachers}>
      <div className="container">
        <div className={classes.teachers__center}>
          <div className={classes.teachers__info}>
            <h2 className={classes['teachers__info-title']}>
              Учитесь у лучших
            </h2>
            <p className={classes['teachers__info-text']}>
              Наши преподаватели – профессионалы, которые добились<br></br>
              успеха в своей области. Лид-дизайнеры известных студий,
              <br></br>
              маркетологи крупнейших компаний, редакторы популярных<br></br>
              медиа: получайте опыт из первых рук, в любое время. <br></br>
              <br></br>Кураторы курсов – наши лучшие выпускники, будут помогать
              <br></br> и поддерживать вас на протяжении всего обучения.
            </p>
            <Button backgroundColor="#10b582">Все преподаватели</Button>
          </div>
          <div className={classes.teachers__presentation}>
            {teachersList.map((teacher, index) => (
              <Teacher teacher={teacher} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers
