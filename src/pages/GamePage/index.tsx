import './styles.scss'
import React, { useContext } from 'react'
import { Icon } from '../../components/Icons/Icon'
import { IconsMap } from '../../components/Icons/IconsMap'
import Container from '../../components/layout/Container'
import Page from '../../components/layout/Page'
import { PlayerContext } from '../../constants/Player'
import { GameType } from '../../constants/routes'

interface Props {
    gameType: GameType,
}

const GamePage = (props: Props) => {
    const { gameType } = props;

    const playerCtx = useContext(PlayerContext);

    return (
        <Page id="game-page" className="game-page">
            <Container>
                <div className="game-page__content">
                    <div className="game-page__menu">
                        <div className="game-page__menu-icons">
                            <Icon
                                className="icon-cross"
                                content={<IconsMap.IconCross />}
                            />
                            <Icon
                                className="icon-circle"
                                content={<IconsMap.IconCircle />}
                            />
                        </div>
                        <div className="game-page__menu-turn block">
                            Turn
                        </div>
                        <button className="button game-page__menu-reset flex">
                            <Icon
                                className="icon-reset"
                                content={<IconsMap.IconReset />}
                            />
                        </button>
                    </div>
                    <div className="game-page__gamefield">

                    </div>
                    <div className="game-page__score">

                    </div>
                </div>
            </Container>
        </Page>
    )
}

export default GamePage