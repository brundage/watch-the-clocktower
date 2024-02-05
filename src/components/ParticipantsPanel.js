import React, { useState } from 'react'
import { useParticipants, useParticipantsDispatch, actions, roles } from './ParticipantsProvider';
import TravellerPanel from './TravellerPanel';
import Participant from './Participant';


export default function PlayersPanel() {
  const dispatch = useParticipantsDispatch()
  const [ editing, setEditing ] = useState(null)
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

  const handleAdd = (e) => {
    e.preventDefault()
    if( e.target[0].value !== "" ) {
      dispatch({type: actions.add, participant: { display: e.target[0].value }, role: addingRole})
    }
    setAdding(false)
    setAddingRole(null)
  }


  const display = (participantId) => {
    const participant = participants.participants[participantId]
    if( participant === undefined ) { throw Error("participant with id " + participantId + " not found") }
    return (<li onClick={() => setEditing(participantId)}
                onKeyUp={(e) => handleKeyUp(e, participant)}
                key={participantId}>
              <Participant editing={editing === participantId} participant={participant} />
            </li>);
  }


  const handleKeyUp = (e, player) => {
    e.key === "Escape" && setEditing(null)
    e.key === "Enter" && setEditing(null)
  }


  return (<section id="players">
    <h1>Players ({participants.townSquare.length})</h1>
    <ul>
      {participants.townSquare.map(display)}
    </ul>
    {addBox(roles.player)}
    <h2>Storytellers</h2>
    <ul>
      {participants.storytellers.map(display)}
    </ul>
    {addBox(roles.storyteller)}
    <TravellerPanel />
  </section>
  )
}