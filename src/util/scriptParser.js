import { fishbucket } from "../scripts/fishbucket"

/*
  script = {
    meta: {
      almanac:
      author:
      name:
    },
    characters: [
      { id: "fortune_teller",
        image: "https://example.com/fortuneteller.png",
        firstNightReminder: "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
        otherNightReminder: "The Fortune Teller points to two players. Show the head signal (nod yes, shake no) for whether one of those players is the Demon.",
        reminders: [ "Red herring" ],
        display: "Fortune Teller",
        effects: [ "each night", "demon finder", "choose" ]
        team: "townsfolk",
        ability: "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
        firstNight: 16,
        otherNight: 3,
        standardAmyPosition: 2
      }, ...
    ]
  }
*/

const scriptParser = (scriptJSON) => {
  const META_STRING = "_meta"

  const extractMeta = () => {
    if( typeof(scriptJSON[0] === "object" && scriptJSON[0].id === META_STRING ) ) { return(scriptJSON[0]) }
  }


  const mapper = (entry) => {
    switch( typeof entry ) {
      case("string"):
        return searchFishbucket(entry)
      case("object"):
        if( entry.id !== META_STRING ) {
          return searchFishbucket(entry.id)
        }
      default:
        if( entry.id !== META_STRING ) {
          console.log("Unrecognized script entry: ", entry)
        }
    }
  }


  const rejector = (entry) => { return entry !== undefined }


  const searchFishbucket = (charId) => { return fishbucket.find( (item) => item.id === charId ) }

  
  return { meta: extractMeta(),
           characters: scriptJSON.map(mapper).filter(rejector)
         }
}

export default scriptParser