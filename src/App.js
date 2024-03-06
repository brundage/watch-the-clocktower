import React, { createContext, StrictMode, useContext, useRef, useState } from 'react';

import CommandLine from './components/CommandLine'
import HistoryPanel from './components/HistoryPanel'
import { HistoryProvider } from './components/HistoryProvider';
import ParticipantsPanel from './components/ParticipantsPanel'
import { ParticipantsProvider } from './components/ParticipantsProvider';
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

// https://javascript.plainenglish.io/embrace-react-composition-for-cleaner-code-a-better-alternative-to-provider-wrapper-hell-ead75512091a
const App = () => {
  const [formatting, setFormatting] = useState({
    "dateFormat": { "hour": "numeric", "minute": "numeric", "second": "numeric" },
    "locale": navigator.language
  })

  return (<>
      <PeriodProvider><HistoryProvider><ParticipantsProvider><ScriptProvider>
      <div className="container">
        <div className="row">
          <ConfirmDialogProvider>
            <div className="col-4"><HistoryPanel formatting={formatting} /></div>
            <div className="col-4"><ParticipantsPanel /></div>
            <div className="col-4"><ScriptPanel /></div>
          </ConfirmDialogProvider>
        </div>
        <hr />
        <div className="row">
          <PeriodPanel />
        </div>
          <div className="row"><CommandLine /></div>
        <div className="row">
        </div>
      </div>
    </ScriptProvider></ParticipantsProvider></HistoryProvider></PeriodProvider>
    <button onClick={() => { window.localStorage.clear() }}>Clear storage</button>
    </>)
};

export default App;