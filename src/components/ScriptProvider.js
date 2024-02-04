// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
// https://stackoverflow.com/questions/69469855/how-to-refactor-this-reducer-following-separation-of-concerns-and-avoiding-code
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { troubleBrewing as defaultScript } from '../scripts/trouble_brewing'
import scriptParser from '../util/scriptParser'

export const actions = { loaded: "loaded" }

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
  const loadedScript = saved !== null ? JSON.parse(saved) : scriptParser(defaultScript)
  return loadedScript
}


function scriptReducer(currentScript, action) {
  switch( action.type ) {
    case actions.loaded: {
      return scriptParser(action.loadedScript)
    }
    default: {
      throw Error("Unknown " + localStorageKey + " action: " + action.type)
    }
  }
}