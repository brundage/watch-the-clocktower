export const badMoonRising = [
    {
        "id": "_meta",
        "name": "Bad Moon Rising",
        "author": "The Pandemonium Institute",
        "almanac": "https://wiki.bloodontheclocktower.com/Bad_Moon_Rising"
    },
    {
        "id": "grandmother",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/grandmother.png",
        "firstNightReminder": "Show the marked character token. Point to the marked player.",
        "otherNightReminder": "If the Grandmother\u2019s grandchild was killed by the Demon tonight: The Grandmother dies.",
        "reminders": ["Grandchild"],
        "name": "Grandmother",
        "team": "townsfolk",
        "ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
        "firstNight": 11,
        "otherNight": 2
    },
    {
        "id": "sailor",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/sailor.png",
        "firstNightReminder": "The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
        "otherNightReminder": "The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
        "reminders": ["Drunk"], "name": "Sailor",
        "team": "townsfolk",
        "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
        "firstNight": 12, "otherNight": 3
    }, {
        "id": "chambermaid",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/chambermaid.png",
        "firstNightReminder": "The Chambermaid points to two players. Show the number signal (0, 1, 2, \u2026) for how many of those players wake tonight for their ability.",
        "otherNightReminder": "The Chambermaid points to two players. Show the number signal (0, 1, 2, \u2026) for how many of those players wake tonight for their ability.",
        "name": "Chambermaid",
        "team": "townsfolk",
        "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
        "firstNight": 13, "otherNight": 4
    }, {
        "id": "exorcist",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/exorcist.png",
        "otherNightReminder": "The Exorcist points to a player, different from the previous night. If that player is the Demon: Wake the Demon. Show the Exorcist token. Point to the Exorcist. The Demon does not act tonight.",
        "reminders": ["Chosen"], "name": "Exorcist",
        "team": "townsfolk",
        "ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
        "otherNight": 5
    }, {
        "id": "innkeeper",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/innkeeper.png",
        "otherNightReminder": "The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.",
        "reminders": ["Protected",
            "Drunk"], "name": "Innkeeper",
        "team": "townsfolk",
        "ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
        "otherNight": 6
    }, {
        "id": "gambler",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/gambler.png",
        "otherNightReminder": "The Gambler points to a player, and a character on their sheet. If incorrect, the Gambler dies.",
        "reminders": ["Dead"], "name": "Gambler",
        "team": "townsfolk",
        "ability": "Each night*, choose a player & guess their character: if you guess wrong, you die.",
        "otherNight": 7
    }, {
        "id": "gossip",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/gossip.png",
        "otherNightReminder": "If the Gossip\u2019s public statement was true: Choose a player not protected from dying tonight. That player dies.",
        "reminders": ["Dead"], "name": "Gossip",
        "team": "townsfolk",
        "ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
        "otherNight": 8
    }, {
        "id": "courtier",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/courtier.png",
        "firstNightReminder": "The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
        "otherNightReminder": "Reduce the remaining number of days the marked player is poisoned. If the Courtier has not yet used their ability: The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
        "reminders": ["Drunk 3",
            "Drunk 2",
            "Drunk 1",
            "No ability"], "name": "Courtier",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
        "firstNight": 14, "otherNight": 9
    }, {
        "id": "professor",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/professor.png",
        "otherNightReminder": "If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.",
        "reminders": ["Alive",
            "No ability"], "name": "Professor",
        "team": "townsfolk",
        "ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
        "otherNight": 10
    }, {
        "id": "minstrel",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/minstrel.png",
        "reminders": ["Everyone drunk"], "name": "Minstrel",
        "team": "townsfolk",
        "ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."
    }, {
        "id": "tealady",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/tealady.png",
        "reminders": ["Can not die"], "name": "Tea Lady",
        "team": "townsfolk",
        "ability": "If both your alive neighbours are good, they can't die."
    }, {
        "id": "pacifist",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/pacifist.png",
        "name": "Pacifist",
        "team": "townsfolk",
        "ability": "Executed good players might not die."
    }, {
        "id": "fool",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/fool.png",
        "reminders": ["No ability"], "name": "Fool",
        "team": "townsfolk",
        "ability": "The first time you die, you don't."
    }, {
        "id": "tinker",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/tinker.png",
        "otherNightReminder": "The Tinker might die.",
        "reminders": ["Dead"], "name": "Tinker",
        "team": "outsider",
        "ability": "You might die at any time.",
        "otherNight": 11
    }, {
        "id": "moonchild",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/moonchild.png",
        "otherNightReminder": "If the Moonchild used their ability to target a player today: If that player is good, they die.",
        "reminders": ["Dead"], "name": "Moonchild",
        "team": "outsider",
        "ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
        "otherNight": 12
    }, {
        "id": "goon",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/goon.png",
        "reminders": ["Drunk"], "name": "Goon",
        "team": "outsider",
        "ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."
    }, {
        "id": "lunatic",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/lunatic.png",
        "firstNightReminder": "If 7 or more players: Show the Lunatic a number of arbitrary 'Minions', players equal to the number of Minions in play. Show 3 character tokens of arbitrary good characters. If the token received by the Lunatic is a Demon that would wake tonight: Allow the Lunatic to do the Demon actions. Place their 'attack' markers. Wake the Demon. Show the Demon\u2019s real character token. Show them the Lunatic player. If the Lunatic attacked players: Show the real demon each marked player. Remove any Lunatic 'attack' markers.",
        "otherNightReminder": "Allow the Lunatic to do the actions of the Demon. Place their 'attack' markers. If the Lunatic selected players: Wake the Demon. Show the 'attack' marker, then point to each marked player. Remove any Lunatic 'attack' markers.",
        "reminders": ["Attack 1",
            "Attack 2",
            "Attack 3"], "name": "Lunatic",
        "team": "outsider",
        "ability": "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
        "firstNight": 15, "otherNight": 13
    }, {
        "id": "godfather",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/godfather.png",
        "firstNightReminder": "Show each of the Outsider tokens in play.",
        "otherNightReminder": "If an Outsider died today: The Godfather points to a player. That player dies.",
        "reminders": ["Died today",
            "Dead"], "setup": true, "name": "Godfather",
        "team": "minion",
        "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [\u22121 or +1 Outsider]",
        "firstNight": 16, "otherNight": 14
    }, {
        "id": "devilsadvocate",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/devilsadvocate.png",
        "firstNightReminder": "The Devil\u2019s Advocate points to a living player. That player survives execution tomorrow.",
        "otherNightReminder": "The Devil\u2019s Advocate points to a living player, different from the previous night. That player survives execution tomorrow.",
        "reminders": ["Survives execution"], "name": "Devil's Advocate",
        "team": "minion",
        "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
        "firstNight": 17, "otherNight": 15
    }, {
        "id": "assassin",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/assassin.png",
        "otherNightReminder": "If the Assassin has not yet used their ability: The Assassin either shows the 'no' head signal, or points to a player. That player dies.",
        "reminders": ["Dead",
            "No ability"], "name": "Assassin",
        "team": "minion",
        "ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
        "otherNight": 16
    }, {
        "id": "mastermind",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/mastermind.png",
        "name": "Mastermind",
        "team": "minion",
        "ability": "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."
    }, {
        "id": "zombuul",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/zombuul.png",
        "otherNightReminder": "If no-one died during the day: The Zombuul points to a player. That player dies.",
        "reminders": ["Died today",
            "Dead"], "name": "Zombuul",
        "team": "demon",
        "ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
        "otherNight": 17
    }, {
        "id": "pukka",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/pukka.png",
        "firstNightReminder": "The Pukka points to a player. That player is poisoned.",
        "otherNightReminder": "The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ",
        "reminders": ["Poisoned",
            "Dead"], "name": "Pukka",
        "team": "demon",
        "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
        "firstNight": 18, "otherNight": 18
    }, {
        "id": "shabaloth",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/shabaloth.png",
        "otherNightReminder": "One player that the Shabaloth chose the previous night might be resurrected. The Shabaloth points to two players. Those players die.",
        "reminders": ["Dead",
            "Alive"], "name": "Shabaloth",
        "team": "demon",
        "ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
        "otherNight": 19
    }, {
        "id": "po",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/po.png",
        "otherNightReminder": "If the Po chose no-one the previous night: The Po points to three players. Otherwise: The Po either shows the 'no' head signal , or points to a player. Chosen players die",
        "reminders": ["Dead",
            "3 attacks"], "name": "Po",
        "team": "demon",
        "ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
        "otherNight": 20
    }, {
        "id": "apprentice",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/apprentice.png",
        "firstNightReminder": "Show the Apprentice the 'You are' card, then a Townsfolk or Minion token. In the Grimoire, replace the Apprentice token with that character token, and put the Apprentice's 'Is the Apprentice' reminder by that character token.",
        "reminders": ["Is the Apprentice"], "name": "Apprentice",
        "team": "traveler",
        "ability": "On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil).",
        "firstNight": 19
    }, {
        "id": "matron",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/matron.png",
        "name": "Matron",
        "team": "traveler",
        "ability": "Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private."
    }, {
        "id": "judge",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/judge.png",
        "reminders": ["No ability"], "name": "Judge",
        "team": "traveler",
        "ability": "Once per game, if another player nominated, you may choose to force the current execution to pass or fail."
    }, {
        "id": "bishop",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/bishop.png",
        "reminders": ["Nominate good",
            "Nominate evil"], "name": "Bishop",
        "team": "traveler",
        "ability": "Only the Storyteller can nominate. At least 1 opposite player must be nominated each day."
    }, {
        "id": "voudon",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/bmrrr/voudon.png",
        "name": "Voudon",
        "team": "traveler",
        "ability": "Only you and the dead can vote. They don't need a vote token to do so. A 50% majority is not required."
    }];