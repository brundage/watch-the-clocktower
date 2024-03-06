import React, { useState } from "react";

export function Character({character}) {
  if( character !== undefined ) {
    const classes = `team-${character.team} character-${character.id}`
    return(<span className={classes}>{character.display}</span>)
  } else {
    return null
  }
}


export default function CharacterCard({ character, includeTooltip=true }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [runningTimeout, setRunningTimeout] = useState()

  const handleMouseOut = () => {
    runningTimeout && setRunningTimeout(clearTimeout(runningTimeout))
    setShowTooltip(false)
  }


  const handleMouseOver = () => { setRunningTimeout(setTimeout(() => { setShowTooltip(true) }, 700)) }


  const Tooltip = () => {
    if (showTooltip) {
      return(<aside className="character-card">
        <table>
          <tbody>
            <tr>
              <td>Ability</td>
              <td>{character.ability}</td>
            </tr>
            <tr>
              <td>Team</td>
              <td className={character.team}>{character.team}</td>
            </tr>
          </tbody>
        </table>
      </aside>
      )
    }
    return null
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Character character={character} /> <Tooltip />
    </div>
  )
}