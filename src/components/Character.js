import React, { useState } from "react";

/*
  { "id": "pukka",
    "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/pukka.png",
    "firstNightReminder": "The Pukka points to a player. That player is poisoned.",
    "otherNightReminder": "The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ",
    "reminders": [
      "Poisoned",
      "Dead"
    ],
    "name": "Pukka",
    "team": "demon",
    "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
    "firstNight": 18,
    "otherNight": 18,
    "SAOpos": 3
}
*/

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