import './styles.scss'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Game, GameType } from '../../constants/routes'
import { IconsMap } from '../Icons/IconsMap';
import { Icon } from '../Icons/Icon';
import { MarkerType, PlayerContext } from '../../constants/Player';

const Menu = () => {
  const playerCtx = useContext(PlayerContext);

  const handleClick = (marker: MarkerType) => {
    playerCtx.setMarker(marker);
  }

  return (
    <div className='main-menu'>
        <div className="main-menu__title">
          <Icon
            className="icon-cross"
            content={<IconsMap.IconCross />}
          />
          <Icon
            className="icon-circle"
            content={<IconsMap.IconCircle />}
          />
        </div>
        <div className="mark-picker">
          <h2 className="mark-picker__title title-h4">Pick player 1's mark</h2>
          <div className="buttons-wrap">
            <button
              className={`button-left ${playerCtx.marker === MarkerType.Cross ? 'active' : ''}`}
              onClick={() => handleClick(MarkerType.Cross)}
            >
              <Icon
                className="icon-cross"
                content={<IconsMap.IconCross />}
              />
            </button>
            <button
              className={`button-right ${playerCtx.marker === MarkerType.Circle ? 'active' : ''}`}
              onClick={() => handleClick(MarkerType.Circle)}
            >
              <Icon
                className="icon-circle"
                content={<IconsMap.IconCircle />}
              />
            </button>
          </div>
        </div>
        <Link to={Game(GameType.cpu)} className='button main-menu__link first'>
          New Game (VS CPU)
        </Link>
        <Link to={Game(GameType.twoPlayers)} className='button main-menu__link second'>
          New Game (VS Player)
        </Link>
    </div>
  )
}

export default Menu