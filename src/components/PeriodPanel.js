import React from "react";
import { actions, usePeriod, usePeriodDispatch } from "./PeriodProvider";
import Period from '../util/period'

import { logDebug } from "../util/logger";
const debug = logDebug({identifier: "PeriodPanel"})

export default function PeriodPanel() {
  const dispatch = usePeriodDispatch()
  const period   = usePeriod()

  const decrementDisplay = (e)   => { e.preventDefault(); dispatch({type: actions.decrementDisplay }) }
  const incrementDisplay = (e)   => { e.preventDefault(); dispatch({type: actions.incrementDisplay }) }
  const zoomCurrent      = ()    => { dispatch({type: actions.zoomCurrent                          }) }
  const zoomTo           = (p,e) => { e.preventDefault(); dispatch({type: actions.zoom, to: p      }) }
  const addPeriod        = (e)   => { e.preventDefault(); dispatch({type: actions.addPeriod        }) }

  const phase = (p) => {
    const classes = [ "capitalize", Period.phase(p), (p === period.display ? 'currentPeriod' : '') ].join(" ")
    return( <li key={p} className={classes}><a href="#" className="period-change" onClick={(e) => zoomTo(p,e)}>{Period.name(p)}</a></li> )
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
        <li key="signpost">Showing: <a className="period-change" href="#" onClick={decrementDisplay}>&larr;</a> <span className="capitalize" onClick={zoomCurrent}>{Period.shortName(period.display)}</span> <a className="period-change" href="#" onClick={incrementDisplay}>&rarr;</a></li>
        <li>|</li>
        <li key="current">Currently: {Period.shortName(period.current)} <a className="period-change" href="#" onClick={addPeriod}>&rarr;</a></li>
        <li>|</li>
        {periods}
      </ul>
    </nav>
    )
  }