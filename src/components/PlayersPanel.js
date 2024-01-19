import React from 'react'
import { usePlayers } from './PlayersProvider';
import TravellerPanel from './TravellerPanel';

export default function PlayersPanel() {
  const players = usePlayers()

  const display = (player) => {
    return (<li key={player.id}>{player.display}</li>);
  }


  return (<section id="players">
    <h1>Players</h1>
    <ul>
      {players.players.map(display)}
    </ul>
    <h2>Storytellers</h2>
    <ul>
      {players.storytellers.map(display)}
    </ul>
    <TravellerPanel playerCount={players.length} />
  </section>
  )
}