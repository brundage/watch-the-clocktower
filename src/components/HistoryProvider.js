// https://react.dev/learn/scaling-up-with-reducer-and-context
import React, { createContext, useContext, useEffect, useReducer } from "react";


const HistoryContext = createContext(null)
const HistoryDispatchContext = createContext(null)
const localStorageKey = "history"

export function HistoryProvider({children}) {
    const [ history, dispatch ] = useReducer( historyReducer, loadInitialHistory() )

    if (typeof window !== "undefined") {
      useEffect(() => {
          localStorage.setItem(localStorageKey, JSON.stringify(history));
        }, [history]);
    }

    return( 
        <HistoryContext.Provider value={history}>
            <HistoryDispatchContext.Provider value={dispatch}>
                {children}
            </HistoryDispatchContext.Provider>
        </HistoryContext.Provider>
    )
}


export function useHistory() {
    return useContext(HistoryContext)
}


export function useHistoryDispatch() {
    return useContext(HistoryDispatchContext)
}


function loadInitialHistory() {
    const saved = typeof window !== "undefined" ? localStorage.getItem(localStorageKey) : null
    const initial = saved !== null ? JSON.parse(saved) : [];
    return initial
}


function historyReducer(history, action) {
    switch( action.type ) {
        case 'append': {
            return [...history, { entry: action.message,
                                  id: Date.now(),
                                  period: action.period
                                }]
        }
        case 'clear': {
            return []
        }
        default: {
            throw Error("Unknown " + localStorageKey + " action: " + action.type)
        }
    }
}