import React, { createContext, StrictMode, useContext, useRef, useState } from 'react';

import useLocalStorage from './util/use_local_storage';

import CommandLine  from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import { HistoryProvider } from './components/HistoryProvider';
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

  function appendHistory(message) {
    setHistory([...history, { "entry": message,
                              "id": Date.now()
                            }])
  }

  return(
    <HistoryProvider><PlayersProvider><ScriptProvider>
    <div className="container">
      <div className="row">
        <div className="col-4"><HistoryPanel formatting={formatting} /></div>
        <div className="col-4"><PlayersPanel /></div>
        <div className="col-4"><ScriptPanel /></div>
      </div>
      <div className="row"><CommandLine /></div>
      <div className="row">
      </div>
  </div>
  </ScriptProvider></PlayersProvider></HistoryProvider>
  )
};

export default App;