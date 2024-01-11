import React, { createContext, StrictMode, useContext, useRef, useState } from 'react';

import troubleBrewing from './data/trouble_brewing'
import defaultPlayers from './data/default_players'

import useLocalStorage from './util/use_local_storage';

import CommandLine  from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import PlayersPanel from './components/PlayersPanel'
import ScriptPanel  from './components/ScriptPanel'


const ScriptContext = createContext(troubleBrewing)
// https://react.dev/learn/scaling-up-with-reducer-and-context


const App = () => {
  const [ formatting, setFormatting ] = useState({
    "dateFormat": { "hour": "numeric", "minute": "numeric", "second": "numeric" },
    "locale": navigator.language
  })
  const [ history, setHistory ] = useLocalStorage("history", [])
  const [ players, setPlayers ] = useLocalStorage("players", defaultPlayers)
  const [ script,  setScript  ] = useLocalStorage("script",  troubleBrewing)

  function appendHistory(message) {
    setHistory([...history, { "entry": message,
                              "id": Date.now()
                            }])
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-4"><HistoryPanel history={history} formatting={formatting} /></div>
        <div className="col-4"><PlayersPanel players={players} /></div>
        <div className="col-4"><ScriptPanel script={script} /></div>
      </div>
      <div className="row">
        <CommandLine appendHistory={appendHistory} players={players} script={script.flatMap((entry) => (entry.id))} />
      </div>
  </div>
  )
};

export default App;