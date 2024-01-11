import React from 'react'
import { usePlayers } from './PlayersProvider';

export default function PlayersPanel() {
  const players = usePlayers()
    function display(player) {
      return(<li key={player}>{player}</li>);
    }
  
    return (<>
      <h1>Players</h1>
      <ul>
        { players.map(display) }
      </ul>
      </>
    )
  
  }