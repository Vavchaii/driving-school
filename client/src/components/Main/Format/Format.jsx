import React from 'react'
import format from '../../../img/format.png'
import classes from './Format.module.css'
import Button from '../../../UI/Button/Button'

const Format = () => {
  return (
    <section className={classes.format}>
          <div className="container">
            <div className={classes.format__group}>
              <div className={classes.format__left}>
                <img src={format} alt="format"></img>
              </div>
              <div className={classes.format__right}>
                <h2 className={classes['format__right-title']}>
                  Выбирайте свой формат обучения
                </h2>
                <p className={classes['format__right-text']}>
                  Смотрите видео-лекции в удобное для вас время, обучайтесь
                  <br></br> на тренажере, участвуйте в интенсивных воркшопах
                  <br></br> с командой или проходите курс с гибким расписанием.
                  <br></br>
                  На нашей платформе каждый найдет подходящий формат.
                </p>
                <Button>Все курсы</Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Format