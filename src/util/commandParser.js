import { mentionTypes as nodeTypes } from "../components/CommandLine"

// import { logDebug } from "./logger"
// const debug = logDebug({identifier: "commandParser"})

const commandParser = (cmd) => {
  let idx = 0
  let currentToken
  const leafTypes      = [ nodeTypes.character, nodeTypes.participant ]
  const operationTypes = [ nodeTypes.command ]
  const ignoreTypes    = [ nodeTypes.string ]


  const getNextToken = () => {
    idx += 1
    return cmd[idx-1]
  }


  const eat = (type) => {
    if( currentToken.type === type ) {
      currentToken = getNextToken()
      return currentToken
    } else {
      error("Expected:", type, "Found:", currentToken.type )
    }
  }


  const error = (msg = "") => {
    throw Error("Invalid command syntax:",msg)
  }


  const parse = () => {
    let node

    while( currentToken !== undefined ) {
      if( ignoreTypes.includes(currentToken.type) ) {
        eat(currentToken.type)

      } else if ( leafTypes.includes(currentToken.type) ) {
        node = leaf(currentToken)
        eat(currentToken.type)

      } else if( operationTypes.includes(currentToken.type) ) {
        const op = currentToken
        eat(currentToken.type)
        return { operation: op, left: node, right: parse() }

      } else {
        error("unrecognized token:", currentToken)

      }
    }
    return node
  }


  const leaf = (token) => {
    return({
      type: token.type,
      entry: token.entry
    })
  }


  currentToken = getNextToken()
  return parse()
}

export default commandParser