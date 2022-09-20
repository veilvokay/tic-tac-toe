import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export enum MarkerType {
    Empty = 'empty',
    Cross = 'cross',
    Circle = 'circle',
}

interface PlayerContextProps {
    marker: MarkerType,
    setMarker(marker: MarkerType): void,
}
const Player: PlayerContextProps = {
    marker: MarkerType.Cross,
    setMarker: () => {},
}
export const PlayerContext = createContext<PlayerContextProps>(Player);

export const PlayerContextPrivder = (props: React.PropsWithChildren) => {
    const [marker, setMarker] = useLocalStorage('marker', Player.marker);

    return (
        <PlayerContext.Provider
            value={{marker, setMarker}}
        >
            {props.children}
        </PlayerContext.Provider>
    );
}