import React from 'react'
export default function HistoryPanel({history, formatting}) {

    function display(entry) {
      return( <li key={entry.id}>
                <time dateTime={entry.id}>{new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}</time> {entry.entry}
              </li>)
    }
  
    function sorter(a,b) {
      return a.id - b.id
    }
  
    return(
      <>
      <h1>History</h1>
      <ul className="history">
        { history.sort(sorter).map(display) }
      </ul>
      </>
    )
  }