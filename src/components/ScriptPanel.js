import React from 'react'

export default function ScriptPanel({script}) {
    const selected = { "townsfolk": true,
                       "outsider": true,
                       "minion": true,
                       "demon": true,
                       "fabled": false,
                       "traveler": false
                     }
    const teams = [ "townsfolk", "outsider", "minion", "demon", "traveller", "fabled" ]
    const sortOrder = "alpha"
  
    if( script.length == 0 ) {
      script = ["No script loaded"]
    }
  
    function rejector(thing) {
      if( thing.id === "_meta" )  {
        return false;
      }
      return selected[thing.team]
    }
  
    function sorter(a, b) {
      let ret;
      switch( sortOrder ) {
        case "alpha":
          ret = a.name.localeCompare(b.name)
          break
        case "sao":
          ret = a.SAOpos - b.SAOpos
          break
        default:
          console.log("Unrecognized sort order ", {sortOrder}, ". Defaulting to alpha by name.")
          ret = a.name.localeCompare(b.name)
      }
      return teams.indexOf(a.team) - teams.indexOf(b.team) || ret || a.name > b.name
    }
  
    function display(entry) {
      return(<li key={entry.id} className={entry.team}>{entry.name}</li>);
    }
  
    const meta = script.find( (entry) => entry.id === "_meta" )
    
    return (<>
      <h1>Script</h1>
      <p className="scriptMeta">
       { meta.name && <span className="scriptName">{meta.name}</span> } by { meta.author && <span className="scriptAuthor">{meta.author}</span> }
        </p>
      <ul>
        { script.filter(rejector).sort(sorter).map(display) }
      </ul>
      </>
    );
  }