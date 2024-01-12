// https://react.dev/learn/scaling-up-with-reducer-and-context
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { troubleBrewing as initialScript } from '../scripts/trouble_brewing'
import { fishbucket } from "../scripts/fishbucket"

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


function scriptReducer(currentScript, action) {

  const searchFishbucket = (character) => {
    if( character.id === "_meta" ) { return character }
    const fish = fishbucket.find( (item) => item.id === character.id )
    return fish || character
  }

  const parseJsonScript = (json) => {
    return Object.values(json).map(searchFishbucket)
  }

    switch( action.type ) {
        case 'changed': {
            return action.changedScript
        }
        case 'loaded': {
            return parseJsonScript(action.loadedScript)
        }
        default: {
            throw Error("Unknown " + localStorageKey + " action: " + action.type)
        }
    }
}