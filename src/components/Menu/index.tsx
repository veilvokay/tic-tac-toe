import './styles.scss'
import React from 'react'
import { Button } from '../layout/Button'

const Menu = () => {
  return (
    <div className='main-menu'>
        <Button
          className='title-h1'
          title='Hello'
          onClick={() => {
            alert('askldhaslk');
            
          }}
        />
    </div>
  )
}

export default Menu