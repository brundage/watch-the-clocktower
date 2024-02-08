import React, { useMemo } from "react"
import { Character } from "./CharacterCard"
import { historyMarkup, mentionTypes } from "./CommandLine"
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

  function historyLexer(markup) {
    if( ! historyMarkup.withPrecap.test(markup) ) { return text }
  
    let match
    const result = []
  
    while( markup.length > 0 ) {
      match = markup.match(historyMarkup.withPrecap)
      if( match ) {
        if( match.groups.pre.length > 0 ) {
          result.push( { type: "string", entry: match.groups.pre } )
        }
  
        switch( match.groups.role ) {
          case mentionTypes.participant: {
            const participant = Object.assign({id: match.groups.id}, participants.participants[match.groups.id])
            result.push({ type: mentionTypes.participant, entry: participant })
            break
          }
          case mentionTypes.character: {
            const character = script.characters.filter( (e) => { return e.id === match.groups.id })[0]
            if( character !== undefined ) {
              result.push({type: mentionTypes.character, entry: character})
            }
            break
          }
          case mentionTypes.command: {
            result.push({type: mentionTypes.command, entry: { display: match.groups.id } })
            break
          }
          default: {
            result.push( {type: "string", entry: match.groups.display })
          }
        }
        markup = markup.replace(match[0], "")
  
      } else {
        result.push({type: "string", entry: markup})
        markup = ""
      }
    }
    return result
  }


  const renderEntry = (text) => {
        return historyLexer(text.markup).map( (token) => {
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
           </abbr> {renderEntry(entry)}</div>
         </div> )
}