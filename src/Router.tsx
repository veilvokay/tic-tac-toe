import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game, GameType, Home } from './constants/routes';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

const Router = () => {

  return (
    <BrowserRouter >
        <Routes>
            <Route path={Home} element={<HomePage />} />
            <Route path={Game(GameType.twoPlayers)} element={<GamePage gameType={GameType.twoPlayers} />} />
            <Route path={Game(GameType.cpu)} element={<GamePage gameType={GameType.cpu} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;