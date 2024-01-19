import React, { useState } from "react";

export default function Character({ character }) {
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
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <span className={character.team}>{character.display}</span> <Tooltip />
    </li>
  )
}