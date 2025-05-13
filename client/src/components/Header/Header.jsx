import { navList } from '../../data/data'
import NavItem from './NavItem'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

const Header = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  })

  return (
    <header className={classes.header}>
      <div className="container">
        <nav className={classes.nav__menu}>
          <ul className={classes['nav__menu-items']}>
            {navList.map((navItem, index) => (
              <NavItem navItem={navItem} key={index} />
            ))}
          </ul>

          <Link className={classes['personal']} to={'personal'}>
            {store.isAuth ? 'Пользователь авторизован' : 'не авторизован'}
          </Link>
          {store.isAuth ? <button onClick={() => store.logout()}>Выйти</button>: false}

        </nav>
      </div>
    </header>
  )
}

export default observer(Header)
