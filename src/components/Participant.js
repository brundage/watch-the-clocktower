import React, { useState } from "react"
import { useScript } from "./ScriptProvider"
import { Character} from "./CharacterCard"

import { logDebug } from "../util/logger"
const debug = logDebug({identifier: "Participant"})

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

const Token = ({token}) => {
  if( token !== undefined ) {
    const script = useScript()
    const character = script.characters[token]
    return( <>
      (<Character character={character} />)
       </>)
  } else {
    return null
  }
}

export default function Participant({participant}) {
  return( <div className="participant">
            <span className="name">{participant.display}</span>
            <Token token={participant.token} />
         </div>
        )
}

