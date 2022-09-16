import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Game } from '../../constants/routes'

const Menu = () => {
  return (
    <div className='main-menu'>
        <Link to={Game('2-players')} className='button main-menu__link'>
          Against Player
        </Link>
        <Link to={Game('cpu')} className='button main-menu__link'>
          Agains CPU
        </Link>
    </div>
  )
}

export default Menu