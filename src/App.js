import React, { StrictMode, useRef, useState } from 'react';
import { troubleBrewing } from './data/trouble_brewing'
import CommandLine  from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import PlayersPanel from './components/PlayersPanel'
import ScriptPanel  from './components/ScriptPanel';

const App = () => {
  const [ formatting, setFormatting ] = useState({
    "dateFormat": { "hour": "numeric", "minute": "numeric", "second": "numeric" },
    "locale": navigator.language
  })
  const [ history, setHistory ] = useState([])
  const [ players, setPlayers ] = useState([ "storyteller", "Occam Blazer", "seat 2", "seat 3", "seat 4"])
  const [ script, setScript ] = useState(troubleBrewing)

  function appendHistory(message) {
    setHistory([...history, { "entry": message,
                              "id": Date.now()
                            }])
  }

  return(
    <div className="container">
    <div className="row">
      <div className="col-4"><HistoryPanel history={history} formatting={formatting}/></div>
      <div className="col-4"><PlayersPanel players={players} /></div>
      <div className="col-4"><ScriptPanel script={script} /></div>
    </div>
    <div className="row"><CommandLine appendHistory={appendHistory} players={players} script={script.flatMap((entry) => (entry.id))} /></div>
  </div>
  )
};

export default App;