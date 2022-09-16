import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Game, GameType } from '../../constants/routes'
import { IconsMap } from '../Icons/IconsMap';
import { Icon } from '../Icons/Icon';

const Menu = () => {
  return (
    <div className='main-menu'>
        <Icon
          className="icon-cross"
          content={<IconsMap.IconCross />}
        />
        <Icon
          className="icon-circle"
          content={<IconsMap.IconCircle />}
        />
        <Link to={Game(GameType.twoPlayers)} className='button main-menu__link'>
          Against Player
        </Link>
        <Link to={Game(GameType.cpu)} className='button main-menu__link'>
          Agains CPU
        </Link>
    </div>
  )
}

export default Menu