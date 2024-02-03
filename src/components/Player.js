import React from "react"
import { useParticipantsDispatch } from './ParticipantsProvider';

/*
  {
    display: "Occam Razor",
    id: 1,
    isGood: true,
    token: "washerwoman",
    abilities: [
      "washerwoman"
    ]
  }
*/

export default function Player({id, player, editing=false}) {
    const dispatch = useParticipantsDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      const newVal = e.target[0].value
      if( player.display !== newVal ) {
        dispatch({type: "edit", id: id, changes: { display: newVal} })
      }
    }

    let content = player.display
  
    if( player.character ) {
      content = content + " (" + player.character + ")"
    }


    if( editing ) {
      return(<form onSubmit={e => handleSubmit(e)} >
               <input defaultValue={player.display}
                      autoFocus={true}
                />
             </form>)
    } else {
      return(<>
        <span>{content}</span>
        </>)
      }
  }
  
  