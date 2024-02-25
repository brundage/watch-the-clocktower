import React, { useMemo } from "react"
import { Character } from "./CharacterCard"
import Period from "../util/period"
import { usePeriod } from "./PeriodProvider"
import Participant from "./Participant"
import { mentionTypes } from './CommandLine'

// import { logDebug } from "../util/logger"
// const debug = logDebug({identifier: "HistoryEntry"})

export default function HistoryEntry({entry, formatting}) {
  const period = usePeriod()
  const cssClass = useMemo(
    () => { return "historyEntry" + (period.display === entry.period.current ? " highlighted": null) },
    [ period ]
  )

  const renderMessage = (message) => {
    return message.map( (token) => {
      switch(token.type) {
        case mentionTypes.character: {
          return <Character key={token.entry.id} character={token.entry} includeTooltip={false} />
        }
        case mentionTypes.command: {
          return token.entry.display
        }
        case mentionTypes.participant: {
          return <Participant key={token.entry.id} participant={token.entry} />
        }
        case "string": {
          return token.entry
        }
      }
    })
  }

  return(<div className={cssClass}>
           <div><abbr title={new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}>
             {Period.shortName(entry.period.current)}
           </abbr> {renderMessage(entry.message)}</div>
         </div> )
}