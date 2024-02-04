import React, { useMemo, useState } from "react";
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { useParticipants } from './ParticipantsProvider'
import { actions, useHistoryDispatch } from './HistoryProvider'
import { usePeriod } from './PeriodProvider'

// https://stackblitz.com/edit/react-mentions?file=index.js

export default function CommandLine() {
  const [ value, setValue ] = useState("")
  const [ mentionData, setMentionData ] = useState()
  const participants = useParticipants()
  const script = useScript()
  const historyDispatch = useHistoryDispatch()
  const period = usePeriod()


  const autocompleteForCharacters = useMemo(
    () => {
      return script.characters.map( (character) => {
        return Object.assign( {type: "character"}, character )
    })
    },
    [script.characters]
  )


  const autocompleteForParticipants = useMemo(
    () => {
      return participants.participants.map( (participant, id) => {
        return Object.assign( {id: id, type: "participant"}, participant)
      })
    },
    [participants.participants]
  )


  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    // console.log("event", event)
    // console.log("newValue", newValue)
    // console.log("newPlainTextValue", newPlainTextValue)
    // console.log("mentions", mentions)
    setMentionData({newValue, newPlainTextValue, mentions})
    setValue(newValue)
  }


  const handleSubmit = (e, historyDispatch) => {
    e.preventDefault()
    const tgt = e.target[0]
    if( tgt.value.length > 0 ) {
      historyDispatch({ type: actions.append,
                        message: tgt.value,
                        period: period
                     })
      setValue("")
      setMentionData("")
    }
  }


  return( <form onSubmit={(e) => { handleSubmit(e, historyDispatch)}}>
    <MentionsInput onChange={handleChange} singleLine={true} value={value} placeholder="Kill with grace, die with dignity." >
      <Mention
        appendSpaceOnAdd={true}
        data={autocompleteForParticipants}
        markup="@{{participant||__id__||__display__}}"
        trigger="@"
      />
      <Mention
        appendSpaceOnAdd={true}
        data={autocompleteForCharacters}
        markup=":{{character||__id__||__display__}}"
        trigger=":"
      />
      </MentionsInput>
      <h3>Mention Data</h3>
      {JSON.stringify(mentionData)}
      <h3>Raw Value</h3>
      {value}
  </form>
  )
}