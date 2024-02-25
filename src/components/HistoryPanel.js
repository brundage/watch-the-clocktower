import React from 'react'
import { actions, useHistory, useHistoryDispatch } from './HistoryProvider'
import useConfirmDialog from "./ConfirmDialog"
import HistoryEntry from './HistoryEntry'

// import { logDebug } from "../util/logger"
// const debug = logDebug({ identifier: "HistoryPanel"})


export default function HistoryPanel({formatting}) {
  const history = useHistory()
  const dispatch = useHistoryDispatch()
  const confirmClear = useConfirmDialog()

  function display(entry) {
    return( <li key={entry.id}><HistoryEntry entry={entry} formatting={formatting} /></li> )
  }

  const handleClear = async () => {
    const ans = await confirmClear()
    if( ans ) { dispatch({type: actions.clear})}
  }

  function sorter(a,b) {
    return a.id - b.id
  }

  return(
    <section id="history">
      <h1>History</h1>
      <button onClick={handleClear}>Clear History</button>
      <ul className="history">
        { history.sort(sorter).map(display) }
      </ul>
    </section>
  )
}