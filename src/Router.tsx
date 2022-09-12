import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './constants/routes';
import HomePage from './pages/HomePage';

const Router = () => {

  return (
    <BrowserRouter >
        <Routes>
            <Route path={Home} element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;