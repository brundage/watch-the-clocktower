// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://medium.com/@williamjoshualacey/refactoring-redux-using-react-context-aa29fa16f4b7
import React, { createContext, useContext, useEffect, useReducer } from "react";

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
    case 'addPeriod': {
      return({ current: period.current + 1, display: period.current + 1 })
    }
    case 'decrementDisplay': {
      if( period.display > 1 ) {
        return({ current: period.current, display: period.display - 1 })
      } else {
        return period
      }
    }

    case 'incrementCurrent': {
      return({ current: period.current + 1, display: period.display })
    }

    case 'incrementDisplay': {
      if( period.display < period.current ) {
        return({ current: period.current, display: period.display + 1 })
      } else {
        return period
      }
    }

    case 'zoom': {
      return({ current: period.current, display: action.to })
    }

    case 'zoomCurrent': {
      return({ current: period.current, display: period.current })
    }

    default: {
      throw Error("Unknown period action: " + action.type)
    }
  }
}