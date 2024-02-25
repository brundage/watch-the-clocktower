// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
// https://stackoverflow.com/questions/69469855/how-to-refactor-this-reducer-following-separation-of-concerns-and-avoiding-code
import React, { createContext, useContext, useEffect, useReducer } from "react";
import historyLexer from "../util/commandLexer"

import { logDebug } from "../util/logger"
const debug = logDebug({identifier: "HistoryProvider"})

export const actions = { append: "append", clear: "clear" }

const HistoryContext = createContext(null)
const HistoryDispatchContext = createContext(null)
const localStorageKey = "history"

export function HistoryProvider({ children }) {
  const [history, dispatch] = useReducer(historyReducer, loadInitialHistory([]))

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(history));
    }, [history]);
 }

  return (
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


function loadInitialHistory(defaultValue) {
  const saved = typeof window !== "undefined" ? localStorage.getItem(localStorageKey) : null
  const initial = saved !== null ? JSON.parse(saved) : defaultValue;
  return initial
}


function historyReducer(history, action) {
  switch (action.type) {
    case actions.append: {
      return [...history, Object.assign({ id: Date.now() }, action.entry )]
    }
    case actions.clear: {
      return []
    }
    default: {
      throw Error("Unknown " + localStorageKey + " action: " + action.type)
    }
  }
}