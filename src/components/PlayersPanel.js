import React from 'react'
import { usePlayers } from './PlayersProvider';
import TravellerPanel from './TravellerPanel';

export default function PlayersPanel() {
  const players = usePlayers()
  function display(player) {
    return (<li key={player}>{player}</li>);
  }

  return (<>
    <h1>Players</h1>
    <ul>
      {players.map(display)}
    </ul>
    <TravellerPanel playerCount={players.length} />
  </>
  )
}