import React, { useState } from "react";
import { MentionsInput, Mention } from 'react-mentions'
import { useScript } from './ScriptProvider'
import { useParticipants } from './ParticipantsProvider'
import { useHistoryDispatch } from './HistoryProvider'
import { usePeriod } from './PeriodProvider'

export default function CommandLine() {
  const [value, setValue] = useState("")
  const participants = useParticipants()
  const script = useScript()
  const historyDispatch = useHistoryDispatch()
  const period = usePeriod()

  const autocompleteForParticipants = () => { return participants.participants }
  const autocompleteForScript = () => { return script.characters.map((entry) => {return {id: entry.id, display: entry.display}})}


  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    // console.log("event", event)
    // console.log("newValue", newValue)
    // console.log("newPlainTextValue", newPlainTextValue)
    // console.log("mentions", mentions)
    setValue(newPlainTextValue)
  }


  const handleSubmit = (e, historyDispatch) => {
    e.preventDefault()
    const tgt = e.target[0]
    if( tgt.value.length > 0 ) {
      historyDispatch({ type: "append",
                        message: tgt.value,
                        period: period
                     })
      setValue("")
    }
  }


return (<form onSubmit={(e) => { handleSubmit(e, historyDispatch)}}>
    <MentionsInput onChange={handleChange} singleLine={true} value={value} placeholder="Kill with grace, die with dignity." >
      <Mention
        appendSpaceOnAdd={true}
        trigger="@"
         data={autocompleteForParticipants()}
      />
      <Mention
        appendSpaceOnAdd={true}
        trigger=":"
        data={autocompleteForScript()}
      />
      </MentionsInput>
      <p><strong>Value:</strong> {value}</p>
  </form>
  )
}