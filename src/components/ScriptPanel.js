import React from 'react'
import { useScript, useScriptDispatch } from "./ScriptProvider"
import JSONLoader from './JsonLoader'
import Character from './Character'

export default function ScriptPanel() {
  const loadedScript = useScript()

  const script = loadedScript.length == 0 ? ["No script loaded"] : loadedScript
  const dispatch = useScriptDispatch()
  const selected = {
    "townsfolk": true,
    "outsider": true,
    "minion": true,
    "demon": true,
    "fabled": false,
    "traveler": false
  }
  const sortOrder = "sao"
  const teams = ["townsfolk", "outsider", "minion", "demon", "traveller", "fabled"]

  function rejector(entry) {
    return( selected[entry.team] )
  }


  function sorter(a, b) {
    let ret;
    switch (sortOrder) {
      case "alpha":
        ret = a.display.localeCompare(b.display)
        break
      case "sao":
        ret = a.standardAmyPosition - b.standardAmyPosition
        break
      default:
        console.log("Unrecognized sort order ", { sortOrder }, ". Defaulting to alpha by name.")
        ret = a.display.localeCompare(b.display)
    }
    return teams.indexOf(a.team) - teams.indexOf(b.team) || ret || a.display > b.display
  }


  function display(entry) {
    return (<Character key={entry.id} character={entry} />);
  }

  
  return(
    <section id="script">
      <h1>Script</h1>
      <p className="scriptMeta">
        {script.meta.name && <span className="scriptName">{script.meta.name}</span>} by {script.meta.author && <span className="scriptAuthor">{script.meta.author}</span>}
      </p>
      <ul>
        {script.characters.filter(rejector).sort(sorter).map(display)}
      </ul>
      <JSONLoader handleRead={(data) => { dispatch({type: 'loaded', loadedScript: data}) }} />
    </section>
  )
}