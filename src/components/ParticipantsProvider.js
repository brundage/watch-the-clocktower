// https://react.dev/learn/scaling-up-with-reducer-and-context
// https://medium.com/@williamjoshualacey/refactoring-redux-using-react-context-aa29fa16f4b7
import React, { createContext, useContext, useEffect, useReducer } from "react";
import initialParticipants from '../data/initial_participants'

const ParticipantsContext = createContext(null)
const ParticipantsDispatchContext = createContext(null)
const localStorageKey = "participants"

export function ParticipantsProvider({ children }) {
  const [participants, dispatch] = useReducer(participantsReducer, loadinitialParticipants())

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(participants));
    }, [participants]);
  }

  return (
    <ParticipantsContext.Provider value={participants}>
      <ParticipantsDispatchContext.Provider value={dispatch}>
         {children}
       </ParticipantsDispatchContext.Provider>
    </ParticipantsContext.Provider>
  )
}


export function useParticipants() {
  return useContext(ParticipantsContext)
}


export function useParticipantsDispatch() {
  return useContext(ParticipantsDispatchContext)
}


function loadinitialParticipants() {
  const saved = localStorage.getItem(localStorageKey);
  const initial = saved !== null ? JSON.parse(saved) : initialParticipants;
  return initial
}


function participantsReducer(participants, action) {
  switch (action.type) {
    case 'changed': {
      return action.id
    }
    case "edit": {
      return({
        participants: participants.participants.map( (participant, i) => {
          if( i === action.id ) {
            return Object.assign({}, participant, action.changes )
          } else {
            return participant
          }
        }),
        townSquare: participants.townSquare,
        storytellers: participants.storytellers
      })
    }
    default: {
      throw Error("Unknown participants action: " + action.type)
    }
  }
}