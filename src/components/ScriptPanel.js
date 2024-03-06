import React, { useEffect, useState } from 'react'
import { useScript, useScriptDispatch } from "./ScriptProvider"
import JSONLoader from './JsonLoader'
import CharacterCard from './CharacterCard'
import { actions } from "./ScriptProvider"
import { actions as historyActions, useHistoryDispatch } from "./HistoryProvider"

// import { logDebug } from "../util/logger"
// const debug = logDebug({identifier: "ScriptPanel"})

const defaultShowTeams = {
  townsfolk: true,
  outsider: true,
  minion: true,
  demon: true,
  fabled: false,
  traveler: false
}

export default function ScriptPanel() {

  const localStorageKey = "showTeams"
  const loadDefaultShowTeams = () => {
    const saved = localStorage.getItem(localStorageKey);
    const initial = saved !== null ? JSON.parse(saved) : defaultShowTeams
    return initial
  }

  const dispatch = useScriptDispatch()
  const historyDispatch = useHistoryDispatch()
  const script = useScript()
  const [ showTeams, setShowTeams ] = useState(loadDefaultShowTeams())

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(showTeams));
    }, [showTeams]);
  }


  const changeScript = (scriptJSON) => {
    dispatch({type: actions.loaded, loadedScript: scriptJSON})
    historyDispatch({type: historyActions.clear})
  }


  function display(entry) {
    return (<li key={"character-" + entry.id}><CharacterCard character={entry} /></li>);
  }


  const handeShowTeamCheckbox = (e) => {
    const ret = {...showTeams}
    ret[e.target.value] = ! ret[e.target.value]
    setShowTeams(ret)
    return ret
  }


  const rejector = (entry) => {
    if( entry === undefined ) { return false }
    return( showTeams[entry.team] )
  }


  const teams = Object.keys(showTeams).map( (t) => {
    const teamId = "team-" + t
    return(
        <label key={teamId}>
          <input onChange={handeShowTeamCheckbox} value={t} id={teamId} type="checkbox" checked={showTeams[t]} /> {t}
        </label>
    )
  })

  return(
    <section id="script">
      <h1>{script.meta.name === undefined ? "Script" : script.meta.name}</h1>
      <p className="scriptMeta">
        by {script.meta.author && <span className="scriptAuthor">{script.meta.author}</span>}
      </p>
      <ul>
        {script.sorted.map((id) => { return script.characters[id]}).filter(rejector).map(display)}
      </ul>
      <JSONLoader handleRead={changeScript} />
      <div>{teams}</div>
    </section>
  )
}