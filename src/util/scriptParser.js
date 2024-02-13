import searchFishbucket from "../scripts/fishbucket"
import { logDebug, logWarn } from "../util/logger"

const warn = logWarn({identifier: "scriptParser"})
const debug = logDebug({identifier: "scriptParser"})

const scriptParser = (script) => {
  const META_STRING = "_meta"

  const extractMeta = () => {
    if( typeof(script[0] === "object" && script[0].id === META_STRING ) ) { return(script[0]) }
  }


  const lookup = (entry) => {
    switch( typeof entry ) {
      case("string"):
        return searchFishbucket(entry)
      case("object"):
        if( entry.id !== META_STRING ) {
          return searchFishbucket(entry.id)
        }
      default:
        if( entry.id !== META_STRING ) {
          warn("Unrecognized script entry: ", entry)
        }
    }
  }


  const reducer = (hash, entry) => {
    const character = lookup(entry)
    if( character ) {
      hash[character.id] = character
    }
    return hash
  }

  return { meta: extractMeta(),
           characters: script.reduce(reducer,{})
         }
}

export default scriptParser