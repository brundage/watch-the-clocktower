import React, { createContext, useContext, useEffect, useReducer } from "react";
import { troubleBrewing as initialScript } from '../scripts/trouble_brewing'

const ScriptContext = createContext(null)
const ScriptDispatchContext = createContext(null)
const localStorageKey = "script"

export function ScriptProvider({children}) {
    const [ script, dispatch ] = useReducer( scriptReducer, loadInitialScript() )

    if (typeof window !== "undefined") {
      useEffect(() => {
          localStorage.setItem(localStorageKey, JSON.stringify(script));
        }, [script]);
    }

    return( 
        <ScriptContext.Provider value={script}>
            <ScriptDispatchContext.Provider value={dispatch}>
                {children}
            </ScriptDispatchContext.Provider>
        </ScriptContext.Provider>
    )
}


export function useScript() {
    return useContext(ScriptContext)
}


export function useScriptDispatch() {
    return useContext(ScriptDispatchContext)
}


function loadInitialScript() {
    const saved = localStorage.getItem(localStorageKey);
    const initial = saved !== null ? JSON.parse(saved) : initialScript;
    return initial
}


function scriptReducer(script, action) {
    switch( action.type ) {
        case 'changed': {
            return action.id
        }
        default: {
            throw Error("Unknown script action: " + action.type)
        }
    }
}