import React, { useState } from 'react'
import { usePlayers } from './PlayersProvider';
import TravellerPanel from './TravellerPanel';
import Player from './Player';


export default function PlayersPanel() {
  const [ editing, setEditing ] = useState(null)
  const players = usePlayers()

  const addPlayer = (e) => {

  }


  const display = (player) => {
    return (<li onClick={() => setEditing(player.id)}
                onKeyUp={(e) => handleKeyUp(e, player)}
                key={player.id}>
              <Player editing={editing === player.id} player={player} />
            </li>);
  }


  const handleKeyUp = (e, player) => {
    e.key === "Escape" && setEditing(null)
    e.key === "Enter" && setEditing(null)
  }


  return (<section id="players">
    <h1>Players</h1>
    <ul>
      {players.players.map(display)}
    </ul>
    <p onClick={(e) => addPlayer(e)}>Add</p>
    <h2>Storytellers</h2>
    <ul>
      {players.storytellers.map(display)}
    </ul>
    <TravellerPanel />
  </section>
  )
}