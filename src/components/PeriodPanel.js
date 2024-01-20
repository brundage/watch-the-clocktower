import React from "react";
import { usePeriod, usePeriodDispatch } from "./PeriodProvider";
import Period from '../util/period'

export default function PeriodPanel() {
  const dispatch = usePeriodDispatch()
  const period   = usePeriod()

  const decrementDisplay = ()  => { dispatch({type: 'decrementDisplay'}) }
  const incrementDisplay = ()  => { dispatch({type: 'incrementDisplay'}) }
  const zoomCurrent      = ()  => { dispatch({type: 'zoomCurrent'     }) }
  const zoomTo           = (p) => { dispatch({type: 'zoom', to: p     }) }
  const addPeriod        = ()  => { dispatch({type: 'addPeriod'       }) }

  const phase = (p) => {
    const classes = [ "capitalize", Period.phase(p), (p === period.display ? 'currentPeriod' : '') ].join(" ")
    return( <li key={p} className={classes} onClick={() => zoomTo(p)}>{Period.name(p)}</li> )
  }

  let periods = []
  if( period.current > 1 ) {
    for( let p = 1; p <= period.current; p++ ) {
      periods.push(phase(p))
    }
  }

  return(
    <nav id="gamePhase" aria-label="Game Phase">
      <ul>
        <li key="signpost">Currently: <span onClick={decrementDisplay}>&lt;&lt;</span> <span className="capitalize" onClick={zoomCurrent}>{Period.name(period.current)}</span> <span onClick={incrementDisplay}>&gt;&gt;</span></li>
        {periods}
        <li key="next" onClick={addPeriod}>Add</li>
      </ul>
    </nav>
    )
  }