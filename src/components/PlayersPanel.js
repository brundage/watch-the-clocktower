import React from 'react'

export default function PlayersPanel({players}) {
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