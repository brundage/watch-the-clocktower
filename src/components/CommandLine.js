import React, { useMemo, useState } from "react";
// https://stackblitz.com/edit/react-mentions?file=index.js
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { actions as participantsActions, useParticipants, useParticipantsDispatch } from './ParticipantsProvider'
import { actions as historyActions, useHistoryDispatch } from './HistoryProvider'
import { usePeriod } from './PeriodProvider'
import commandLexer from "../util/commandLexer"
import commandParser from "../util/commandParser"

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
  participant: "participant",
  string: "string"
}


export default function CommandLine() {
  const initialCommand = { markup: "" }
  const [ command, setCommand ] = useState(initialCommand)
  const historyDispatch = useHistoryDispatch()
  const participants = useParticipants()
  const participantsDispatch = useParticipantsDispatch()
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


  const handleChange = (e, newValue, newPlainTextValue, mentions) => {
    setCommand({ markup: newValue, plainText: newPlainTextValue, mentions: mentions})
  }


  const handleCommand = (command) => {
    debug("handling command:", command)
    const entry = commands.find((cmd) => { return cmd.id === command.operation.entry.display })
    if( entry !== undefined ) {
      entry.callback(command)
    }

  }

  const handleSubmit = (e, historyDispatch) => {
    e.preventDefault()
    if( command.markup.length > 0 ) {
      const message = commandLexer({ markup: command.markup,
                                     script: script,
                                     participants: participants
                                  })
      handleCommand(commandParser(message))
      historyDispatch({ type: historyActions.append,
                        entry: { message: message, period: period }
                     })
      setCommand(initialCommand)
    }
  }

 
  const claim = (command) => {
debug("claims", command)
    debug(command.left.entry.display, "claims", command.right.entry.display)
    participantsDispatch({ type: participantsActions.edit,
                           id: command.left.entry.id,
                           changes: { token: command.right.entry.id }
                        })
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