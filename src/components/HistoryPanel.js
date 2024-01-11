import React from 'react'
import { useHistory, useHistoryDispatch } from './HistoryProvider'
import useConfirmDialog from "./ConfirmDialog"


export default function HistoryPanel({formatting}) {
  const history = useHistory()
  const historyDispatcher = useHistoryDispatch()
  const confirmClear = useConfirmDialog()

  function display(entry) {
    return( <li key={entry.id}>
              <time dateTime={entry.id}>{new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}</time> {entry.entry}
            </li> )
  }

  const handleClear = async () => {
    const ans = await confirmClear()
    if( ans ) { historyDispatcher({type: "clear"})}
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