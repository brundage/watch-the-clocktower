import React, { useRef, useState } from 'react'
import AutocompletePanel from './AutocompletePanel'
import { useScript } from './ScriptProvider'
import { usePlayers } from './PlayersProvider'
import { useHistoryDispatch } from './HistoryProvider'

export default function CommandLine() {

  const [ autocompleteCandidates, setAutocompleteCandidates ] = useState([])
  const [ autocompleteIndex, setAutocompleteIndex ] = useState()
  const historyDispatch = useHistoryDispatch()
  const inputEl = useRef(null)
  const players = usePlayers()
  const script = useScript()
  const [ searchList, setSearchList ] = useState([])
  const [ searchKey, setSearchKey ] = useState("")

  const endPos = () => {
    if( inputEl ) {
      return inputEl.current.selectionStart
    }
  }

  const handleChange = (e) => {
    const str = e.target.value
    switch(str.slice(-1)) {
      case "@":
        setSearchKey("@")
        setSearchList(players)
        break
      case ":":
        setSearchKey(":")
        setSearchList(script)
        break
      case " ":
        userSelected()
        break
    }
    if( searching() ) {
      const search = str.slice(startPos(),endPos()).toLowerCase()
      if( search.length > 0 ) {
        // const list = searchList.filter((item) => item.id.toLowerCase().startsWith(search)).map((item) => item.id)
        const list = searchList.filter((item) => item.toLowerCase().startsWith(search))
        setAutocompleteCandidates(list)
        setAutocompleteIndex(0)
      } else {
        setAutocompleteCandidates([])
        setAutocompleteIndex(null)
      }
    }
  }

  const handleKeyDown = (e) => {
    if( searching() ) {
      switch(e.key.toLowerCase()) {
        case "arrowdown":
          setAutocompleteIndex(autocompleteIndex === autocompleteCandidates.length - 1 ? 0 : autocompleteIndex + 1)
          break
        case "arrowup":
        setAutocompleteIndex(autocompleteIndex === 0 ? autocompleteCandidates.length - 1 : autocompleteIndex - 1)
          break
        case "enter":
          if( searching() ) {
            e.preventDefault()
            userSelected(autocompleteCandidates[autocompleteIndex])
          }
          break
        case "tab":
          if( searching() ) {
            e.preventDefault()
            userSelected(autocompleteCandidates[autocompleteIndex])
          }
          break
      }
    }
  }

  const handleSubmit = (e,historyDispatch) => {
    e.preventDefault()
    const tgt = e.target[0]
    if( tgt.value.length > 0 ) {
      historyDispatch({ type: "append",
                        message: tgt.value
                     })
      tgt.value = ""
    }
  }

  const onItemSelected = (entry) => {
    userSelected(entry)
  }

  const searching = () => { return searchKey !== "" }

  const startPos = () => {
    if( inputEl && searchKey ) {
      return inputEl.current.value.lastIndexOf(searchKey, startPos) + 1
    }
  }

  const stopSearch = () => {
    setAutocompleteCandidates([])
    setAutocompleteIndex(null)
    setSearchKey("")
  }

  const userSelected = (val) => {
    if( searching() && inputEl ) {
      const str = inputEl.current.value
      const pre = str.slice(0, startPos()-1)
      const post = str.slice(endPos(),-1).trimEnd() + " "
      stopSearch()
      if( ! val ) { val = str.slice(startPos() - 1, endPos() ) }
      inputEl.current.value = pre + val + post
      inputEl.current.focus()
    }
  }

  return(
    <form onSubmit={(e) => { handleSubmit(e,historyDispatch)}}>
      <AutocompletePanel entries={autocompleteCandidates} selected={autocompleteIndex} onItemSelected={onItemSelected} />
        <input autoFocus={true}
               id="command-line"
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               placeholder="Kill with grace, die with dignity."
               ref={inputEl}
               type="text"
        />
    </form>
  )
}
