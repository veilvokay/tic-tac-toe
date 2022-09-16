import React from 'react'
import Container from '../../components/layout/Container'
import Page from '../../components/layout/Page'
import { GameType } from '../../constants/routes'

interface Props {
    gameType: GameType,
}

const GamePage = (props: Props) => {
    const { gameType } = props;


    return (
        <Page id="home-page" className="home-page">
            <Container>
                <div className="home-page__content">
                    
                </div>
            </Container>
        </Page>
    )
}

export default GamePage