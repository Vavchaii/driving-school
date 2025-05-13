import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const NavItem = ({ navItem }) => {
  return (
    <li className={classes['nav__menu-items-item']}>
      <Link to= {navItem.ref}>{navItem.text}</Link>
    </li>
  )
}

export default NavItem
