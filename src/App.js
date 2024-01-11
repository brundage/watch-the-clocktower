import React, { createContext, StrictMode, useContext, useRef, useState } from 'react';

import useLocalStorage from './util/use_local_storage';

import CommandLine  from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import PlayersPanel from './components/PlayersPanel'
import { PlayersProvider } from './components/PlayersProvider';
import ScriptPanel  from './components/ScriptPanel'
import { ScriptProvider } from './components/ScriptProvider';


// https://react.dev/learn/scaling-up-with-reducer-and-context


const App = () => {
  const [ formatting, setFormatting ] = useState({
    "dateFormat": { "hour": "numeric", "minute": "numeric", "second": "numeric" },
    "locale": navigator.language
  })
  const [ history, setHistory ] = useLocalStorage("history", [])

  function appendHistory(message) {
    setHistory([...history, { "entry": message,
                              "id": Date.now()
                            }])
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-4"><HistoryPanel history={history} formatting={formatting} /></div>
        <PlayersProvider>
          <div className="col-4"><PlayersPanel /></div>
        </PlayersProvider>
        <ScriptProvider>
          <div className="col-4"><ScriptPanel /></div>
        </ScriptProvider>
      </div>
        <ScriptProvider>
          <PlayersProvider>
            <div className="row"><CommandLine appendHistory={appendHistory} /></div>
          </PlayersProvider>
          </ScriptProvider>
      <div className="row">

      </div>
  </div>
  )
};

export default App;