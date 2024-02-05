import React, { useMemo } from "react"
import { Character } from "./CharacterCard"
import { historyMarkup } from "./CommandLine"
import Period from "../util/period"
import { usePeriod } from "./PeriodProvider"
import { useScript } from "./ScriptProvider"
import { useParticipants } from "./ParticipantsProvider"
import Participant from "./Participant"


export default function HistoryEntry({entry, formatting}) {
  const period = usePeriod()
  const cssClass = useMemo(
    () => { return "historyEntry" + (period.display === entry.period.current ? " highlighted": null) },
    [ period ]
  )
  const script = useScript()
  const participants = useParticipants()

  const renderEntry = (text) => {
    let markup = text.markup
    if( ! historyMarkup.regexp.test(markup) ) { return text }

    let match
    const result = []

    while( markup.length > 0 ) {
      match = markup.match(historyMarkup.regexp)
      if( match ) {

        if( match.groups.pre.length > 0 ) {
          result.push( match.groups.pre )
        }

        switch( match.groups.role ) {
          case "participant": {
            const participant = participants.participants[match.groups.id]
            result.push( <Participant key={match.groups.id} participant={participant} />)
            break
          }
          case "character": {
            const character = script.characters.filter( (e) => { return e.id === match.groups.id })[0]
            if( character !== undefined ) {
              result.push( <Character key={match.groups.id} character={character} includeTooltip={false} />)
            }
            break
          }
          default: {
          }
        }
        markup = markup.replace(match[0], "")

      } else {
        result.push(markup)
        markup = ""
      }
    }
    return result
  }


  return(<div className={cssClass}>
           <div><abbr title={new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}>
             {Period.shortName(entry.period.current)}
           </abbr> {renderEntry(entry)}</div>
         </div> )
}