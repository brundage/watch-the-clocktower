import React from 'react'

export default function AutocompletePanel({entries, selected, onItemSelected}) {

    if( entries.length <= 0 ) { return null }
  
    function display(entry,i) {
      return(
        <li key={entry}
          className={selected === i ? "selected" : "" }
          onClick={() => { onItemSelected(entry) }}
        >
          {entry}
        </li>
      )
    }
  
    return(<ol className="autocompletePanel">{entries.map(display)}</ol>)
  }