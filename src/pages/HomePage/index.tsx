import './styles.scss';
import React from 'react'
import Container from '../../components/layout/Container'
import Page from '../../components/layout/Page'
import Menu from '../../components/Menu';

const HomePage = () => {
  return (
    <Page id='home-page' className='home-page'>
        <Container>
            <h1 className="title-h1 home-page__title">Tic Tac Toe</h1>
            <div className="home-page__content">
              <Menu />
            </div>
        </Container>
    </Page>
  )
}

export default HomePage