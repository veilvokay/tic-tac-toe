import './styles.scss';
import React from 'react'
import Container from '../../components/layout/Container'
import Page from '../../components/layout/Page'
import Menu from '../../components/Menu';

const HomePage = () => {
  return (
    <Page id='home-page' className='home-page'>
        <Container>
            <div className="home-page__content">
              <Menu />
            </div>
        </Container>
    </Page>
  )
}

export default HomePage