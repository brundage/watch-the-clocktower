import React, { useState } from 'react'
import { useParticipants } from './ParticipantsProvider';
import TravellerPanel from './TravellerPanel';
import Player from './Player';


export default function PlayersPanel() {
  const [ editing, setEditing ] = useState(null)
  const participants = useParticipants()

  const addPlayer = (e) => {

  }


  const addStoryteller = (e) => {

  }


  const display = (playerId) => {
    const player = participants.participants[playerId]
    if( player === undefined ) { throw Error("player with id " + playerId + " not found") }
    return (<li onClick={() => setEditing(playerId)}
                onKeyUp={(e) => handleKeyUp(e, player)}
                key={playerId}>
              <Player editing={editing === playerId} id={playerId} player={player} />
            </li>);
  }


  const handleKeyUp = (e, player) => {
    e.key === "Escape" && setEditing(null)
    e.key === "Enter" && setEditing(null)
  }


  return (<section id="players">
    <h1>Players</h1>
    <ul>
      {participants.townSquare.map(display)}
    </ul>
    <p onClick={(e) => addPlayer(e)}>Add</p>
    <h2>Storytellers</h2>
    <ul>
      {participants.storytellers.map(display)}
    </ul>
    <p onClick={(e) => addStoryteller(e)}>Add</p>
    <TravellerPanel />
  </section>
  )
}