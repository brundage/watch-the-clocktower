import React, { useState } from 'react'
import { useParticipants, useParticipantsDispatch, actions, roles } from './ParticipantsProvider';
import TravellerPanel from './TravellerPanel';
import EditableField from './EditableField';
import Participant from "./Participant"

export default function PlayersPanel() {
  const dispatch = useParticipantsDispatch()
  const [ adding, setAdding ] = useState(null)
  const [ addingRole, setAddingRole ] = useState(null)
  const participants = useParticipants()


  const addBox = (role) => {
    if( adding && addingRole === role ) {
      return(<form onSubmit={e => handleAdd(e)} >
               <input autoFocus={true} />
             </form>)
    } else {
    return(<p onClick={(e) => {setAdding(true); setAddingRole(role)}}>Add</p>) 
    }
  }

  const handleAddTown = (e, id, newParticipant) => {
    handleAdd(e, roles.player, newParticipant)
  }

  const handleAddStoryteller  = (e, id, newParticipant) => {
    handleAdd(e, roles.storyteller, newParticipant)
  }

  const handleAdd = (e, role, newParticipant) => {
    e.preventDefault()
    if( newParticipant !== "" ) {
      dispatch({type: actions.add, participant: { display: newParticipant }, role: role})
    }
  }


  const handleSubmit = (e, id, updatedValue) => {
    e.preventDefault()
    if( updatedValue !== "" ) {
      dispatch({type: actions.edit, id: id, changes: { display: updatedValue } })
    }
  }
  

  const display = (participantId) => {
    const participant = participants.participants[participantId]
    if( participant === undefined ) { throw Error("participant with id " + participantId + " not found") }
    return (<li key={participantId}>
              <EditableField value={participant.display} id={participantId} onSubmit={handleSubmit}>
                <Participant id={participantId} participant={participant} />
              </EditableField>
            </li>);
  }


  return (<section id="players">
    <h1>Players ({participants.townSquare.length})</h1>
    <ul>
      {participants.townSquare.map(display)}
    </ul>
    <EditableField value="" onSubmit={handleAddTown}>Add</EditableField>
    <h2>Storytellers</h2>
    <ul>
      {participants.storytellers.map(display)}
    </ul>
    <EditableField value="" onSubmit={handleAddStoryteller}>Add</EditableField>
    <TravellerPanel />
  </section>
  )
}