import React from 'react'
import { iconList } from '../../../data/icons'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__cont}>
        <div className="container">
          <div className={classes.footer__menu}>
            <div className={classes['footer__menu-item']}>
              <div className={classes['footer__menu-item-wrapper']}>
                <img
                  className={classes.welcome__logo}
                  src={iconList[3].icon}
                  alt="logo"
                ></img>
                <h2 className={classes.welcome__company}>RoadPro</h2>
              </div>
              <p className={classes['footer__menu-item-text']}>
                Образовательная онлайн-платформа <br></br> для развития и
                тренировки навыков<br></br> в сфере информационных технологий
              </p>
              <div className={classes['footer__menu-item-icons']}>
                <img src={iconList[0].icon} alt="facebook"></img>
                <img src={iconList[1].icon} alt="vk"></img>
                <img src={iconList[2].icon} alt="inst"></img>
              </div>
            </div>
            <div className={classes['footer__menu-item']}>
              <span className={classes['footer__menu-item-title']}>Обучение</span>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Курсы
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Вебинары
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Тренажеры
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Воркшопы
              </a>
            </div>
            <div className={classes['footer__menu-item']}>
              <span className={classes['footer__menu-item-title']}>О нас</span>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                О платформе
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Преподаватели
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Тарифы
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Отзывы
              </a>
            </div>
            <div className={classes['footer__menu-item']}>
              <span className={classes['footer__menu-item-title']}>Контакты</span>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                <nobr>Связаться с нами</nobr>
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Консультация
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Реквизиты
              </a>
              <a className={classes['footer__menu-item-ref']} href="#ref">
                Поддержка
              </a>
            </div>
            <div className={classes['footer__menu-item']}>
              <span className={classes['footer__menu-item-title']}>Возникли вопросы?</span>
              <p className={classes['footer__menu-item-text']}>
                Напишите нам на почту <u>education@ementor.info</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={classes.footer__group}>
          <div className={classes.footer__left}>
            <span className={classes['footer__group-text']}>
              RoadPro © 2024 Все права защищены
            </span>
          </div>
          <div className={classes.footer__right}>
            <span className={classes['footer__group-text']}>
              Политика обработки персональных данных
            </span>
            <span className={classes['footer__group-text']}>Публичная оферта</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
