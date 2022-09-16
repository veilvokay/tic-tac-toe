// Main routers
export const Home = '/';

// Game
// export const Game = '/game';

const gameType = 'cpu';
export function Game(gameType: '2-players' | 'cpu') { return `/game/${gameType}`; }
export namespace Game {
    export const GameType = Game(gameType);
}