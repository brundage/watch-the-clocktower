import React from "react";
import { usePeriod, usePeriodDispatch } from "./PeriodProvider";

export default function PeriodPanel() {
  const dispatch = usePeriodDispatch()
  const period   = usePeriod()

  const decrementDisplay = ()  => { dispatch({type: 'decrementDisplay'}) }
  const incrementDisplay = ()  => { dispatch({type: 'incrementDisplay'}) }
  const zoomCurrent      = ()  => { dispatch({type: 'zoomCurrent'     }) }
  const zoomTo           = (p) => { dispatch({type: 'zoom', to: p     }) }
  const addPeriod        = ()  => { dispatch({type: 'addPeriod'       }) }

  const periodPhase = (p) => { return (p % 2 === 0 ? "day" : "night") }
  const periodName  = (p) => { return periodPhase(p) + " " + periodNum(p) }
  const periodNum   = (p) => { return Math.ceil(p/2) }

  const phase = (p) => {
    const classes = [ "capitalize", periodPhase(p), (p === period.display ? 'currentPeriod' : '') ].join(" ")
    return( <li key={p} className={classes} onClick={() => zoomTo(p)}>{periodName(p)}</li> )
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
        <li key="signpost">Currently: <span onClick={decrementDisplay}>&lt;&lt;</span> <span className="capitalize" onClick={zoomCurrent}>{periodName(period.current)}</span> <span onClick={incrementDisplay}>&gt;&gt;</span></li>
        {periods}
        <li key="next" onClick={addPeriod}>Add</li>
      </ul>
    </nav>
    )
  }