import React, { useState } from "react"
/*
  {
    display: "Occam Razor",
    isGood: true,
    token: "washerwoman",
    abilities: [
      "washerwoman"
    ]
  }
*/

export default function Participant({id, participant}) {
  return(
    <span className="participant-name">{participant.display}</span>
  )
}

