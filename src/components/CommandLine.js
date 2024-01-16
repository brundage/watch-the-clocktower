import React, { useState } from "react";
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { usePlayers } from './PlayersProvider'
import { useHistoryDispatch } from './HistoryProvider'

export default function CommandLine() {
  const [value, setValue] = useState("")
  const players = usePlayers()
  const script = useScript()
  const historyDispatch = useHistoryDispatch()

  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    console.log("event: ", event)
    console.log("newValue: ", newValue)
    console.log("newPlainTextValue: ", newPlainTextValue)
    console.log("mentions: ", mentions)
    setValue(newPlainTextValue)
  }


  const handleSubmit = (e, historyDispatch) => {
    e.preventDefault()
    const tgt = e.target[0]
    if( tgt.value.length > 0 ) {
      historyDispatch({ type: "append",
                        message: tgt.value
                     })
      setValue("")
    }
  }

  
  return (<form onSubmit={(e) => { handleSubmit(e, historyDispatch)}}>
    <MentionsInput onChange={handleChange} singleLine={true} value={value} placeholder="Kill with grace, die with dignity." >
      <Mention
        appendSpaceOnAdd={true}
        trigger="@"
         data={players.players.concat(players.storytellers)}
      />
      <Mention
        appendSpaceOnAdd={true}
        trigger=":"
        data={script}
      />
      </MentionsInput>
      <p><strong>Value:</strong> {value}</p>
  </form>
  )
}