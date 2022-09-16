// Main routers
export const Home = '/';

// Game
export enum GameType {
    twoPlayers = 'two-players',
    cpu = 'cpu',
}

export function Game(gameType: GameType) { return `/game/${gameType}`; }
export namespace Game {
    export const DefaultGameType = Game(GameType.cpu);
}