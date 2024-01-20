import React, { useMemo } from "react"
import Period from "../util/period"
import { usePeriod } from "./PeriodProvider"

export default function HistoryEntry({entry, formatting}) {
  const period = usePeriod()
  const cssClass = useMemo(
    () => { return "historyEntry" + (period.display === entry.period.current ? " highlighted": null) },
    [ period ]
  )

  return(<div className={cssClass}>
           <abbr title={new Intl.DateTimeFormat(formatting.locale, formatting.dateFormat).format(entry.id)}>
             {Period.shortName(entry.period.current)}
           </abbr>
            &nbsp;{entry.entry}
         </div> )
}