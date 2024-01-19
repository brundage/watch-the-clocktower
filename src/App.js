import React, { createContext, StrictMode, useContext, useRef, useState } from 'react';

import CommandLine from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import { HistoryProvider } from './components/HistoryProvider';
import PlayersPanel from './components/PlayersPanel'
import { PlayersProvider } from './components/PlayersProvider';
import ScriptPanel from './components/ScriptPanel'
import { ScriptProvider } from './components/ScriptProvider';
import { ConfirmDialogProvider } from './components/ConfirmDialog';
import PeriodPanel from './components/PeriodPanel';
import { PeriodProvider } from './components/PeriodProvider';

/*
  State data
    Players
    Script
    Player selections
    Player character
    Phase
*/

const App = () => {
  const [formatting, setFormatting] = useState({
    "dateFormat": { "hour": "numeric", "minute": "numeric", "second": "numeric" },
    "locale": navigator.language
  })

  function appendHistory(message) {
    setHistory([...history, {
      "entry": message,
      "id": Date.now()
    }])
  }

  return (<>
      <PeriodProvider><PeriodPanel /></PeriodProvider>
      <HistoryProvider><PlayersProvider><ScriptProvider>
      <div className="container">
        <div className="row">
          <ConfirmDialogProvider>
            <div className="col-4"><HistoryPanel formatting={formatting} /></div>
          </ConfirmDialogProvider>
          <div className="col-4"><PlayersPanel /></div>
          <div className="col-4"><ScriptPanel /></div>
        </div>
        <hr />
        <div className="row"><CommandLine /></div>
        <div className="row">
        </div>
      </div>
    </ScriptProvider></PlayersProvider></HistoryProvider>
    <button onClick={() => { window.localStorage.clear() }}>Clear storage</button>
    </>)
};

export default App;