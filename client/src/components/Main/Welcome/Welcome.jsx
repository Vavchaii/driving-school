import React from 'react'
import Button from '../../../UI/Button/Button'
import classes from './Welcome.module.css'
import main1 from '../../../img/main-1.png'
import main2 from '../../../img/main-2.png'
import logo from '../../../img/logo.png'

const Welcome = () => {
  return (
    <section className={classes.welcome}>
      <div className="container">
        <div className={classes.main__center}>
          <div className={classes['welcome-cl-1']}>
            <img
              className={classes.welcome__img}
              src={main2}
              alt="photos"
            ></img>
          </div>
          <div className={classes['welcome-cl-2']}>
            <div className={classes.welcome__group}>
              <img
                className={classes.welcome__logo}
                src={logo}
                alt="logo"
              ></img>
              <h2 className={classes.welcome__company}>RoadPro</h2>
            </div>

            <h1 className={classes.welcome__heading}>
              Образовательная <br></br> онлайн-платформа
            </h1>
            <p className={classes.welcome__text}>
              Курсы и видео-лекции по вождению транспортных средств, правилам
              ПДД и другим направлениям
            </p>
            <Button>Все направления</Button>
          </div>
          <div className="welcome-cl-3">
            <img className="welcome__img" src={main1} alt="photos"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
