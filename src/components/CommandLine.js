import React, { useMemo, useState } from "react";
// https://stackblitz.com/edit/react-mentions?file=index.js
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { useParticipants, roles } from './ParticipantsProvider'
import { actions, useHistoryDispatch } from './HistoryProvider'
import { usePeriod } from './PeriodProvider'
import commandLexer from "../util/commandLexer"

import { logDebug } from "../util/logger"
const debug = logDebug({identifier: "CommandLine"})


export const commandMarkup = {
  regexp: /{{(?<role>[^|]+)\|\|(?<id>[^|]+)\|\|(?<display>[^|]+)}}/,
  withPrecap: /^(?<pre>[^{]*){{(?<role>[^|]+)\|\|(?<id>[^|]+)\|\|(?<display>[^|]+)}}/,
  markupFor: (role) => { return "{{" + role + "||__id__||__display__}}" }
}


export const mentionTypes = {
  character: "character",
  command: "command",
  participant: "participant"
}


export default function CommandLine() {
  const initialCommand = { markup: "" }
  const [ command, setCommand ] = useState(initialCommand)
  const historyDispatch = useHistoryDispatch()
  const participants = useParticipants()
  const period = usePeriod()
  const script = useScript()

  const autocompleteForCharacters = useMemo(
    () => {
      return Object.values(script.characters).map( (character) => {
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
    setCommand({ markup: newValue, plainText: newPlainTextValue, mentions: mentions})
  }


  // const handleCommands = () => {
  //   const regexp = new RegExp( commandMarkup.regexp.source, "g" )
  //   const entered = [...command.markup.matchAll(regexp)].filter( (m) => { return m[1] === mentionTypes.command } )
  //   debug(entered)
  // }


  const handleSubmit = (e, historyDispatch) => {
    // handleCommands()
    e.preventDefault()
    if( command.markup.length > 0 ) {
      const message = commandLexer({ markup: command.markup,
                                     script: script,
                                     participants: participants
                                  })
      historyDispatch({ type: actions.append,
                        entry: { message: message, period: period }
                     })
      setCommand(initialCommand)
    }
  }

 
  const claim = () => {

  }


  const commands = [
    { id: "claims",
      callback: claim,
      display: "claims"
    }
  ]


  return( <form onSubmit={(e) => { handleSubmit(e, historyDispatch)}}>
    <MentionsInput onChange={handleChange} singleLine={true} value={command.markup} placeholder="Kill with grace, die with dignity." >
      <Mention
        appendSpaceOnAdd={true}
        data={autocompleteForParticipants}
        markup={commandMarkup.markupFor(mentionTypes.participant)}
        trigger="@"
      />
      <Mention
        appendSpaceOnAdd={true}
        data={autocompleteForCharacters}
        markup={commandMarkup.markupFor(mentionTypes.character)}
        trigger=":"
      />
      <Mention
        appendSpaceOnAdd={true}
        data={commands}
        markup={commandMarkup.markupFor(mentionTypes.command)}
        trigger="/"
      />
      </MentionsInput>
  </form>
  )
}