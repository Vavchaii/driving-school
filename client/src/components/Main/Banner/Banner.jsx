import React from 'react'
import classes from './Banner.module.css'
import Button from '../../../UI/Button/Button'

const Banner = () => {
  return (
    <section className={classes.banner}>
          <div className="container">
            <div className={classes.banner__group}>
              <div className={classes['banner__group-left']}></div>
              <div className={classes['banner__group-right']}>
                <h2 className={classes.banner__title}>
                  Присоединяйтесь <br></br> к RoadPro сейчас
                </h2>
                <p className={classes.banner__text}>
                  Выберите подходящий тариф и формат обучения, пройдите 2{' '}
                  <br></br> урока и мы подарим вам дополнительные лекции по
                  любому <br></br> направлению бесплатно!
                </p>
                <Button>Все тарифы</Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Banner