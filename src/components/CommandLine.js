import React, { useMemo, useState } from "react";
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { useParticipants } from './ParticipantsProvider'
import { actions, useHistoryDispatch } from './HistoryProvider'
import { usePeriod } from './PeriodProvider'

// https://stackblitz.com/edit/react-mentions?file=index.js

export const historyMarkup = {
  regexp: /^(?<pre>[^{]*){{(?<role>[^|]+)\|\|(?<id>[^|]+)\|\|(?<display>[^|]+)}}/,
  markupFor: (role) => { return "{{" + role + "||__id__||__display__}}" }
}


export default function CommandLine() {
  const initialCommand = { markup: "" }
  const [ command, setCommand ] = useState(initialCommand)
  const participants = useParticipants()
  const script = useScript()
  const historyDispatch = useHistoryDispatch()
  const period = usePeriod()


  const autocompleteForParticipants = useMemo(
    () => {
      return participants.participants.map( (participant, id) => {
        return Object.assign( {id: id, type: "participant"}, participant)
      })
    },
    [participants.participants]
  )


  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    setCommand({ markup: newValue, plainText: newPlainTextValue, mentions: mentions})
  }


  const handleSubmit = (e, historyDispatch) => {
    e.preventDefault()
    if( command.markup.length > 0 ) {
      historyDispatch({ type: actions.append,
                        entry: Object.assign({ period: period }, command)
                     })
      setCommand(initialCommand)
    }
  }


  return( <form onSubmit={(e) => { handleSubmit(e, historyDispatch)}}>
    <MentionsInput onChange={handleChange} singleLine={true} value={command.markup} placeholder="Kill with grace, die with dignity." >
      <Mention
        appendSpaceOnAdd={true}
        data={autocompleteForParticipants}
        markup={historyMarkup.markupFor("participant")}
        trigger="@"
      />
      <Mention
        appendSpaceOnAdd={true}
        data={script.characters}
        markup={historyMarkup.markupFor("character")}
        trigger=":"
      />
      </MentionsInput>
  </form>
  )
}