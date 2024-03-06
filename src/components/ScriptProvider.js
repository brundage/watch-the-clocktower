// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
// https://stackoverflow.com/questions/69469855/how-to-refactor-this-reducer-following-separation-of-concerns-and-avoiding-code
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { troubleBrewing as defaultScript } from '../scripts/trouble_brewing'
import scriptParser from "../util/scriptParser"

/*
  script = {
    meta: {
      almanac:
      author:
      name:
      sortOrder:
    },
    characters: {
      id: { id: "fortune_teller",
          image: "https://example.com/fortuneteller.png",
          firstNightReminder: "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
          otherNightReminder: "The Fortune Teller points to two players. Show the head signal (nod yes, shake no) for whether one of those players is the Demon.",
          reminders: [ "Red herring" ],
          display: "Fortune Teller",
          effects: [ "each night", "demon finder", "choose" ]
          team: "townsfolk",
          ability: "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
          firstNight: 16,
          otherNight: 3,
          standardAmyPosition: 2
        }, ...
    },
    sorted: [ id, id, id ... ]
  }
*/

import { logDebug, logWarn } from "../util/logger"
const logIdent = "ScriptProvider"
const debug = logDebug({identifier: logIdent})
const warn = logWarn({identifier: logIdent})

export const actions = { loaded: "loaded", sort: "sort" }

export const sortOrders = { alpha: "alphabetecial",
                            default: "standard amy order",
                            sao: "standard amy order"
                          }

export const teams = {
  townsfolk: {
    id: "townsfolk",
    display: "Townsfolk",
    sortPosition: 0
  },
  outsider: {
    id: "outsider",
    display: "Outsider",
    sortPosition: 1
  },
  minion: {
    id: "minion",
    display: "Minion",
    sortPosition: 2
  },
  demon: {
    id: "demon",
    display: "Demon",
    sortPosition: 3
  },
  traveler: {
    id: "traveler",
    display: "Traveler",
    sortPosition: 4
  },
  fabled: {
    id: "fabled",
    display: "Fabled",
    sortPosition: 5
  }
}

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


const parseDefaultScript = () => {
  return sortScript(scriptParser(defaultScript))
}


const sortAlpha = (a,b) => {
  return a.display.localeCompare(b.display)
}
const sortDefault = sortAlpha


const sortSAO = (a,b) => {
  return a.standardAmyPosition - b.standardAmyPosition
}


const sortTeam = (a,b) => {
  return teams[a.team].sortPosition - teams[b.team].sortPosition
}


const sortFn = (order) => {
  switch( order ) {
    case sortOrders.alpha:
      return sortAlpha
    case sortOrders.sao:
      return sortSAO
    default:
      warn("Unrecognized sort order:", order, "Using default")
      return sortDefault
  }
}


const sortWith = (sorters) => {
  return( (a,b) => {
    return sorters.reduce( (sortPos, sorter) => { return sortPos || sorter(a,b) }, 0 )
  })
}


const sortScript = (script) => {
  const sorter = sortWith([sortTeam, sortFn(script.meta.sortOrder)])
  return({ ...script,
           sorted: Object.values(script.characters).sort(sorter).map( (e) => {return e.id})
        })
}


function loadInitialScript() {
  const saved = localStorage.getItem(localStorageKey);
  const loadedScript = saved !== null ? JSON.parse(saved) : parseDefaultScript()
  return loadedScript
}


function scriptReducer(currentScript, action) {
  switch( action.type ) {
    case actions.loaded: {
      const parsed =scriptParser(action.loadedScript)
      return sortScript(parsed)
    }
    case actions.sort: {
      return sortScript(currentScript)
    }
    default: {
      throw Error("Unknown " + localStorageKey + " action: " + action.type)
    }
  }
}