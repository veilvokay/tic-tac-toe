import './styles.scss'
import React, { useContext, useState } from 'react'
import { Icon } from '../../components/Icons/Icon'
import { IconsMap } from '../../components/Icons/IconsMap'
import Container from '../../components/layout/Container'
import Page from '../../components/layout/Page'
import { MarkerType, PlayerContext } from '../../constants/Player'
import { GameType } from '../../constants/routes'

const GamefieldCells = Array(9).fill(MarkerType.Empty);

interface Props {
    gameType: GameType,
}

const GamefieldCell = (props: {value: MarkerType, currentValue: MarkerType}) => {

    const [cellValue, setCellValue] = useState<MarkerType | null>(props.value);

    const handleCellClick = () => {
        setCellValue(props.currentValue);
    }

    return (
        <div
            className="block gamefield-cell"
            data-value={cellValue}
            onClick={handleCellClick}
        >
            {cellValue === MarkerType.Empty && (null)}
            {cellValue === MarkerType.Circle && (
                <Icon content={<IconsMap.IconCircle />} />
            )}
            {cellValue === MarkerType.Cross && (
                <Icon content={<IconsMap.IconCross />} />
            )}
        </div>
    )
}

const GamePage = (props: Props) => {
    const { gameType } = props;

    const playerCtx = useContext(PlayerContext);
    const [currentPlayerMarker, setCurrentPlayerMarker] = useState<MarkerType>(playerCtx.marker);

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
                        <div className="game-page__gamefield-cells row-1">
                            {GamefieldCells.slice(0, GamefieldCells.length / 3).map((cell, i) => (
                                <GamefieldCell value={cell} currentValue={currentPlayerMarker} key={i} />
                            ))}
                        </div>
                        <div className="game-page__gamefield-cells row-2">
                            {GamefieldCells.slice(GamefieldCells.length / 3, (GamefieldCells.length / 3) * 2).map((cell, i) => (
                                <GamefieldCell value={cell} currentValue={currentPlayerMarker} key={i} />
                            ))}
                        </div>
                        <div className="game-page__gamefield-cells row-3">
                            {GamefieldCells.slice((GamefieldCells.length / 3) * 2, GamefieldCells.length).map((cell, i) => (
                                <GamefieldCell value={cell} currentValue={currentPlayerMarker} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="game-page__score">

                    </div>
                </div>
            </Container>
        </Page>
    )
}

export default GamePage