// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://medium.com/@williamjoshualacey/refactoring-redux-using-react-context-aa29fa16f4b7
// https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
// https://stackoverflow.com/questions/69469855/how-to-refactor-this-reducer-following-separation-of-concerns-and-avoiding-code
import React, { createContext, useContext, useEffect, useReducer } from "react";

export const actions = { addPeriod: "addPeriod",
                         decrementDisplay: "decrementDisplay",
                         incrementDisplay: "incrementDisplay",
                         zoom: "zoom",
                         zoomCurrent: "zoomCurrent"
                       }

const PeriodContext = createContext(null)
const PeriodDispatchContext = createContext(null)
const localStorageKey = "period"

const initialPeriod = { current: 1, display: 1 }

export function PeriodProvider({children}) {
    const [ period, dispatch ] = useReducer( periodReducer, loadInitialPeriod() )

    if (typeof window !== "undefined") {
      useEffect(() => {
          localStorage.setItem(localStorageKey, JSON.stringify(period));
        }, [period]);
    }

    return( 
        <PeriodContext.Provider value={period}>
            <PeriodDispatchContext.Provider value={dispatch}>
                {children}
            </PeriodDispatchContext.Provider>
        </PeriodContext.Provider>
    )
}


export function usePeriod() {
    return useContext(PeriodContext)
}


export function usePeriodDispatch() {
    return useContext(PeriodDispatchContext)
}


function loadInitialPeriod() {
    const saved = localStorage.getItem(localStorageKey);
    const initial = saved !== null ? JSON.parse(saved) : initialPeriod;
    return initial
}


function periodReducer(period, action) {
  switch( action.type ) {
    case actions.addPeriod: {
      return({ ...period, current: period.current + 1, display: period.current + 1 })
    }
    case actions.decrementDisplay: {
      if( period.display > 1 ) {
        return({ ...period, display: period.display - 1 })
      } else {
        return period
      }
    }

    case actions.incrementCurrent: {
      return({ ...period, current: period.current + 1 })
    }

    case actions.incrementDisplay: {
      if( period.display < period.current ) {
        return({ ...period, display: period.display + 1 })
      } else {
        return period
      }
    }

    case actions.zoom: {
      return({ ...period, display: action.to })
    }

    case actions.zoomCurrent: {
      return({ ...period, display: period.current })
    }

    default: {
      throw Error("Unknown period action: " + action.type)
    }
  }
}