import React, { createContext, useContext, useEffect, useReducer } from "react";
import { defaultPlayers as initialPlayers } from '../data/default_players'


const PlayersContext = createContext(null)
const PlayersDispatchContext = createContext(null)
const localStorageKey = "players"

export function PlayersProvider({children}) {
    const [ players, dispatch ] = useReducer( playersReducer, loadInitialPlayers() )

    if (typeof window !== "undefined") {
      useEffect(() => {
          localStorage.setItem(localStorageKey, JSON.stringify(players));
        }, [players]);
    }

    return( 
        <PlayersContext.Provider value={players}>
            <PlayersDispatchContext.Provider value={dispatch}>
                {children}
            </PlayersDispatchContext.Provider>
        </PlayersContext.Provider>
    )
}


export function usePlayers() {
    return useContext(PlayersContext)
}


export function usePlayersDispatch() {
    return useContext(PlayersDispatchContext)
}


function loadInitialPlayers() {
    const saved = localStorage.getItem(localStorageKey);
    const initial = saved !== null ? JSON.parse(saved) : initialPlayers;
    return initial
}


function playersReducer(players, action) {
    switch( action.type ) {
        case 'changed': {
            return action.id
        }
        default: {
            throw Error("Unknown players action: " + action.type)
        }
    }
}