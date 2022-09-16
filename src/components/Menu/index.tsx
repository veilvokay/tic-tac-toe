import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Game, GameType } from '../../constants/routes'
import { IconsMap } from '../Icons/IconsMap';
import { Icon } from '../Icons/Icon';

const Menu = () => {
  return (
    <div className='main-menu'>
        <div className="mark-picker">
          <h2 className="mark-picker__title title-h4">Pick player 1's mark</h2>
          <div className="buttons-wrap">
            <button className="button-left">
              <Icon
                className="icon-cross"
                content={<IconsMap.IconCross />}
              />
            </button>
            <button className="button-right active">
              <Icon
                className="icon-circle"
                content={<IconsMap.IconCircle />}
              />
            </button>
          </div>
        </div>
        <Link to={Game(GameType.cpu)} className='button main-menu__link first '>
          New Game (VS CPU)
        </Link>
        <Link to={Game(GameType.twoPlayers)} className='button main-menu__link second'>
          New Game (VS Player)
        </Link>
    </div>
  )
}

export default Menu