import React from "react"
import { actions, useParticipantsDispatch } from './ParticipantsProvider';

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

export default function Participant({ participant, editing = false }) {

  if (participant === undefined) { return null }

  const handleSubmit = (e) => {
    const dispatch = useParticipantsDispatch()
    e.preventDefault()
    const newVal = e.target[0].value
    if (participant.display !== newVal) {
      dispatch({ type: actions.edit, id: participant.id, changes: { display: newVal } })
    }
  }

  let content = participant.display

  if (participant.character) {
    content = content + " (" + participant.character + ")"
  }


  if (editing) {
    return (<form onSubmit={e => handleSubmit(e)} >
      <input defaultValue={participant.display}
        autoFocus={true}
      />
    </form>)
  } else {
    return (<>
      <span>{content}</span>
    </>)
  }
}

