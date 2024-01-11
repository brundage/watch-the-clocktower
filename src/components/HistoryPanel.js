import React from 'react'
import { useHistory } from './HistoryProvider'

export default function HistoryPanel({formatting}) {
    const history = useHistory()

    function display(entry) {
      return( <li key={entry.id}>
                <time dateTime={entry.id}>{new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}</time> {entry.entry}
              </li>)
    }
  
    function sorter(a,b) {
      return a.id - b.id
    }
  
    console.log(history)
    return(
      <>
      <h1>History</h1>
      <ul className="history">
        { history.sort(sorter).map(display) }
      </ul>
      </>
    )
  }