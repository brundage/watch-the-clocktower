import { commandMarkup, mentionTypes } from "../components/CommandLine"

// import { logDebug } from "./logger"
// const debug = logDebug({identifier: "commandLexer"})


const commandLexer = (config) => {

  let   markup       = config.markup
  const participants = config.participants
  const script       = config.script

  if (!commandMarkup.withPrecap.test(markup)) { return [{ type: mentionTypes.string, entry: markup }] }

  let match
  const result = []

  while (markup.length > 0) {
    match = markup.match(commandMarkup.withPrecap)
    if (match) {
      if (match.groups.pre.length > 0) {
        result.push({ type: mentionTypes.string, entry: match.groups.pre })
      }

      switch (match.groups.role) {
        case mentionTypes.participant: {
          const participant = Object.assign({ id: match.groups.id }, participants.participants[match.groups.id])
          result.push({ type: mentionTypes.participant, entry: participant })
          break
        }
        case mentionTypes.character: {
          const character = script.characters[match.groups.id]
          if (character !== undefined) {
            result.push({ type: mentionTypes.character, entry: character })
          }
          break
        }
        case mentionTypes.command: {
          result.push({ type: mentionTypes.command, entry: { display: match.groups.id } })
          break
        }
        default: {
          result.push({ type: mentionTypes.string, entry: match.groups.display })
        }
      }
      markup = markup.replace(match[0], "")

    } else {
      result.push({ type: mentionTypes.string, entry: markup })
      markup = ""
    }
  }
  return result
}

export default commandLexer