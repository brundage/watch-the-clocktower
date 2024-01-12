export const fishbucket = [
    {
        "id": "_meta",
        "name": "Bad Moon Rising",
        "author": "The Pandemonium Institute",
        "almanac": "https://wiki.bloodontheclocktower.com/Bad_Moon_Rising"
    },
    {
        "id": "noble_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/noble_exp.png",
        "firstNightReminder": "Point to 3 players including one evil player, in no particular order.",
        "reminders": ["Seen"], "name": "Noble",
        "team": "townsfolk",
        "ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
        "firstNight": 11
    },
    {
        "id": "bountyhunter_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/bountyhunter_exp.png",
        "firstNightReminder": "Point to 1 evil player. Wake the townsfolk who is evil and show them the 'You are' card and the thumbs down evil sign.",
        "otherNightReminder": "If the known evil player has died, point to another evil player. ",
        "reminders": ["Known"], "setup": true, "name": "Bounty Hunter",
        "team": "townsfolk",
        "ability": "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
        "firstNight": 12, "otherNight": 2
    }, {
        "id": "pixie_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/pixie_exp.png",
        "firstNightReminder": "Show the Pixie 1 in-play Townsfolk character token.",
        "reminders": ["Mad",
            "Has ability"], "name": "Pixie",
        "team": "townsfolk",
        "ability": "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
        "firstNight": 13
    }, {
        "id": "general_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/general_exp.png",
        "firstNightReminder": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
        "otherNightReminder": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
        "name": "General",
        "team": "townsfolk",
        "ability": "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
        "firstNight": 14, "otherNight": 3
    }, {
        "id": "preacher_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/preacher_exp.png",
        "firstNightReminder": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
        "otherNightReminder": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
        "reminders": ["At a sermon"], "name": "Preacher",
        "team": "townsfolk",
        "ability": "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
        "firstNight": 15, "otherNight": 4
    }, {
        "id": "king_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/king_exp.png",
        "firstNightReminder": "Wake the Demon, show them the 'This character selected you' card, show the King token and point to the King player.",
        "otherNightReminder": "If there are more dead than living, show the King a character token of a living player.",
        "name": "King",
        "team": "townsfolk",
        "ability": "Each night, if the dead outnumber the living, you learn 1 alive character. The Demon knows who you are.",
        "firstNight": 16, "otherNight": 5
    }, {
        "id": "balloonist_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/balloonist_exp.png",
        "firstNightReminder": "Choose a character type. Point to a player whose character is of that type. Place the Balloonist's Seen reminder next to that character.",
        "otherNightReminder": "Choose a character type that does not yet have a Seen reminder next to a character of that type. Point to a player whose character is of that type, if there are any. Place the Balloonist's Seen reminder next to that character.",
        "reminders": ["Seen Townsfolk",
            "Seen Outsider",
            "Seen Minion",
            "Seen Demon",
            "Seen Traveller"], "setup": true, "name": "Balloonist",
        "team": "townsfolk",
        "ability": "Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]",
        "firstNight": 17, "otherNight": 6
    }, {
        "id": "cultleader_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/cultleader_exp.png",
        "firstNightReminder": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
        "otherNightReminder": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
        "name": "Cult Leader",
        "team": "townsfolk",
        "ability": "Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.",
        "firstNight": 18, "otherNight": 7
    }, {
        "id": "lycanthrope_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/lycanthrope_exp.png",
        "otherNightReminder": "The Lycanthrope points to a living player: if good, they die and no one else can die tonight.",
        "reminders": ["Dead"], "name": "Lycanthrope",
        "team": "townsfolk",
        "ability": "Each night*, choose a living player: if good, they die, but they are the only player that can die tonight.",
        "otherNight": 8
    }, {
        "id": "amnesiac_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/amnesiac_exp.png",
        "firstNightReminder": "Decide the Amnesiac's entire ability. If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
        "otherNightReminder": "If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
        "reminders": ["?"], "name": "Amnesiac",
        "team": "townsfolk",
        "ability": "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
        "firstNight": 19, "otherNight": 9
    }, {
        "id": "nightwatchman_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/nightwatchman_exp.png",
        "firstNightReminder": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
        "otherNightReminder": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
        "reminders": ["No ability"], "name": "Nightwatchman",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose a player: they learn who you are.",
        "firstNight": 20, "otherNight": 10
    }, {
        "id": "engineer_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/engineer_exp.png",
        "firstNightReminder": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the You are card and the relevant character tokens.",
        "otherNightReminder": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the 'You are' card and the relevant character tokens.",
        "reminders": ["No ability"], "name": "Engineer",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose which Minions or which Demon is in play.",
        "firstNight": 21, "otherNight": 11
    }, {
        "id": "fisherman_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/fisherman_exp.png",
        "reminders": ["No ability"], "name": "Fisherman",
        "team": "townsfolk",
        "ability": "Once per game, during the day, visit the Storyteller for some advice to help you win."
    }, {
        "id": "huntsman_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/huntsman_exp.png",
        "firstNightReminder": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
        "otherNightReminder": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
        "reminders": ["No ability"], "setup": true, "name": "Huntsman",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
        "firstNight": 22, "otherNight": 12
    }, {
        "id": "alchemist_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/alchemist_exp.png",
        "firstNightReminder": "Show the Alchemist a not-in-play Minion token",
        "remindersGlobal": ["Is the Alchemist"], "name": "Alchemist",
        "team": "townsfolk",
        "ability": "You have a not-in-play Minion ability.",
        "firstNight": 23
    }, {
        "id": "farmer_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/farmer_exp.png",
        "otherNightReminder": "If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the 'You are' card and the Farmer character token.",
        "name": "Farmer",
        "team": "townsfolk",
        "ability": "If you die at night, an alive good player becomes a Farmer.",
        "otherNight": 13
    }, {
        "id": "magician_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/magician_exp.png",
        "name": "Magician",
        "team": "townsfolk",
        "ability": "The Demon thinks you are a Minion. Minions think you are a Demon."
    }, {
        "id": "choirboy_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/choirboy_exp.png",
        "otherNightReminder": "If the King was killed by the Demon, wake the Choirboy and point to the Demon player.",
        "setup": true, "name": "Choirboy",
        "team": "townsfolk",
        "ability": "If the Demon kills the King, you learn which player is the Demon. [+ the King]",
        "otherNight": 14
    }, {
        "id": "poppygrower_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/poppygrower_exp.png",
        "firstNightReminder": "Do not inform the Demon\/Minions who each other are",
        "otherNightReminder": "If the Poppy Grower has died, show the Minions\/Demon who each other are.",
        "reminders": ["Evil wakes"], "name": "Poppy Grower",
        "team": "townsfolk",
        "ability": "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
        "firstNight": 24, "otherNight": 15
    }, {
        "id": "atheist_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/atheist_exp.png",
        "setup": true, "name": "Atheist",
        "team": "townsfolk",
        "ability": "The Storyteller can break the game rules & if executed, good wins, even if you are dead. [No evil characters]"
    }, {
        "id": "cannibal_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/cannibal_exp.png",
        "reminders": ["Poisoned",
            "Died today"], "name": "Cannibal",
        "team": "townsfolk",
        "ability": "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."
    }, {
        "id": "snitch_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/snitch_exp.png",
        "firstNightReminder": "After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.",
        "name": "Snitch",
        "team": "outsider",
        "ability": "Minions start knowing 3 not-in-play characters.",
        "firstNight": 25
    }, {
        "id": "acrobat_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/acrobat_exp.png",
        "otherNightReminder": "If a good living neighbour is drunk or poisoned, the Acrobat player dies.",
        "reminders": ["Dead"], "name": "Acrobat",
        "team": "outsider",
        "ability": "Each night*, if either good living neighbour is drunk or poisoned, you die.",
        "otherNight": 16
    }, {
        "id": "puzzlemaster_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/puzzlemaster_exp.png",
        "reminders": ["Drunk",
            "Guess used"], "name": "Puzzlemaster",
        "team": "outsider",
        "ability": "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."
    }, {
        "id": "heretic_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/heretic_exp.png",
        "name": "Heretic",
        "team": "outsider",
        "ability": "Whoever wins, loses & whoever loses, wins, even if you are dead."
    }, {
        "id": "damsel_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/damsel_exp.png",
        "firstNightReminder": "Wake all the Minions, show them the 'This character selected you' card and the Damsel token.",
        "otherNightReminder": "If selected by the Huntsman, wake the Damsel, show 'You are' card and a not-in-play Townsfolk token.",
        "reminders": ["Guess used"], "name": "Damsel",
        "team": "outsider",
        "ability": "All Minions know you are in play. If a Minion publicly guesses you (once), your team loses.",
        "firstNight": 26, "otherNight": 17
    }, {
        "id": "golem_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/golem_exp.png",
        "reminders": ["Can not nominate"], "name": "Golem",
        "team": "outsider",
        "ability": "You may only nominate once per game. When you do, if the nominee is not the Demon, they die."
    }, {
        "id": "politician_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/politician_exp.png",
        "name": "Politician",
        "team": "outsider",
        "ability": "If you were the player most responsible for your team losing, you change alignment & win, even if dead."
    }, {
        "id": "widow_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/widow_exp.png",
        "firstNightReminder": "Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the 'These characters are in play' card, then the Widow character token.",
        "reminders": ["Poisoned"], "remindersGlobal": ["Knows"], "name": "Widow",
        "team": "minion",
        "ability": "On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play.",
        "firstNight": 27
    }, {
        "id": "fearmonger_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/fearmonger_exp.png",
        "firstNightReminder": "The Fearmonger points to a player. Place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
        "otherNightReminder": "The Fearmonger points to a player. If different from the previous night, place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
        "reminders": ["Fear"], "name": "Fearmonger",
        "team": "minion",
        "ability": "Each night, choose a player. If you nominate & execute them, their team loses. All players know if you choose a new player.",
        "firstNight": 28, "otherNight": 18
    }, {
        "id": "psychopath_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/psychopath_exp.png",
        "name": "Psychopath",
        "team": "minion",
        "ability": "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."
    }, {
        "id": "goblin_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/goblin_exp.png",
        "reminders": ["Claimed"], "name": "Goblin",
        "team": "minion",
        "ability": "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."
    }, {
        "id": "mezepheles_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/mezepheles_exp.png",
        "firstNightReminder": "Show the Mezepheles their secret word.",
        "otherNightReminder": "Wake the 1st good player that said the Mezepheles' secret word and show them the 'You are' card and the thumbs down evil signal.",
        "reminders": ["Turns evil",
            "No ability"], "name": "Mezepheles",
        "team": "minion",
        "ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
        "firstNight": 29, "otherNight": 19
    }, {
        "id": "boomdandy_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/boomdandy_exp.png",
        "name": "Boomdandy",
        "team": "minion",
        "ability": "If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them dies."
    }, {
        "id": "lilmonsta_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/lilmonsta_exp.png",
        "firstNightReminder": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta.",
        "otherNightReminder": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta. Choose a player, that player dies.",
        "remindersGlobal": ["Is the Demon",
            "Dead"], "setup": true, "name": "Lil' Monsta",
        "team": "demon",
        "ability": "Each night, Minions choose who babysits Lil' Monsta's token & \"is the Demon\". A player dies each night*. [+1 Minion]",
        "firstNight": 30, "otherNight": 20
    }, {
        "id": "lleech_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/lleech_exp.png",
        "firstNightReminder": "The Lleech points to a player. Place the Poisoned reminder token.",
        "otherNightReminder": "The Lleech points to a player. That player dies.",
        "reminders": ["Dead",
            "Poisoned"], "name": "Lleech",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die.",
        "firstNight": 31, "otherNight": 21
    }, {
        "id": "alhadikhia_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/alhadikhia_exp.png",
        "otherNightReminder": "The Al-Hadikhia chooses 3 players. Announce the first player, wake them to nod yes to live or shake head no to die, kill or resurrect accordingly, then put to sleep and announce the next player. If all 3 are alive after this, all 3 die.",
        "reminders": ["1",
            "2",
            "3",
            "Chose death",
            "Chose life"], "name": "Al-Hadikhia",
        "team": "demon",
        "ability": "Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
        "otherNight": 22
    }, {
        "id": "legion_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/legion_exp.png",
        "otherNightReminder": "Choose a player, that player dies.",
        "reminders": ["Dead",
            "About to die"], "setup": true, "name": "Legion",
        "team": "demon",
        "ability": "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
        "otherNight": 23
    }, {
        "id": "leviathan_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/leviathan_exp.png",
        "firstNightReminder": "Place the Leviathan 'Day 1' marker. Announce 'The Leviathan is in play; this is Day 1.'",
        "otherNightReminder": "Change the Leviathan Day reminder for the next day.",
        "reminders": ["Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Good player executed"], "name": "Leviathan",
        "team": "demon",
        "ability": "If more than 1 good player is executed, you win. All players know you are in play. After day 5, evil wins.",
        "firstNight": 32, "otherNight": 24
    }, {
        "id": "riot_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/riot_exp.png",
        "setup": true, "name": "Riot",
        "team": "demon",
        "ability": "Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]"
    }, {
        "id": "gangster_exp",
        "image": "https:\/\/www.bloodstar.xyz\/p\/OccamBlazzer\/exp\/gangster_exp.png",
        "name": "Gangster",
        "team": "traveler",
        "ability": "Once per day, you may choose to kill an alive neighbour, if your other alive neighbour agrees."
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
    },
    {
        "id": "_meta",
        "author": "The Pandemonium Institute",
        "name": "Sects and Violets",
        "almanac": "https://wiki.bloodontheclocktower.com/Sects_%26_Violets"
    },
    {
        "id": "clockmaker",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/clockmaker.png",
        "firstNightReminder": "Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.",
        "name": "Clockmaker",
        "team": "townsfolk",
        "ability": "You start knowing how many steps from the Demon to its nearest Minion.",
        "firstNight": 11
    },
    {
        "id": "dreamer",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/dreamer.png",
        "firstNightReminder": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
        "otherNightReminder": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
        "name": "Dreamer",
        "team": "townsfolk",
        "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct.",
        "firstNight": 12, "otherNight": 2
    },
    {
        "id": "snakecharmer",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/snakecharmer.png",
        "firstNightReminder": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
        "otherNightReminder": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
        "reminders": ["Poisoned"], "name": "Snake Charmer",
        "team": "townsfolk",
        "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
        "firstNight": 13, "otherNight": 3
    },
    {
        "id": "mathematician",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/mathematician.png",
        "firstNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
        "otherNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
        "reminders": ["Abnormal"], "name": "Mathematician",
        "team": "townsfolk",
        "ability": "Each night, you learn how many players\u2019 abilities worked abnormally (since dawn) due to another character's ability.",
        "firstNight": 14, "otherNight": 4
    },
    {
        "id": "flowergirl",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/flowergirl.png",
        "otherNightReminder": "Nod 'yes' or shake head 'no' for whether the Demon voted today. Place the 'Demon not voted' marker (remove 'Demon voted', if any).",
        "reminders": ["Demon voted",
            "Demon not voted"], "name": "Flowergirl",
        "team": "townsfolk",
        "ability": "Each night*, you learn if a Demon voted today.",
        "otherNight": 5
    },
    {
        "id": "towncrier",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/towncrier.png",
        "otherNightReminder": "Nod 'yes' or shake head 'no' for whether a Minion nominated today. Place the 'Minion not nominated' marker (remove 'Minion nominated', if any).",
        "reminders": ["Minions not nominated",
            "Minion nominated"], "name": "Town Crier",
        "team": "townsfolk",
        "ability": "Each night*, you learn if a Minion nominated today.",
        "otherNight": 6
    },
    {
        "id": "oracle",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/oracle.png",
        "otherNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of dead evil players.",
        "name": "Oracle",
        "team": "townsfolk",
        "ability": "Each night*, you learn how many dead players are evil.",
        "otherNight": 7
    },
    {
        "id": "savant",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/savant.png",
        "name": "Savant",
        "team": "townsfolk",
        "ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."
    },
    {
        "id": "seamstress",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/seamstress.png",
        "firstNightReminder": "The Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
        "otherNightReminder": "If the Seamstress has not yet used their ability: the Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
        "reminders": ["No ability"], "name": "Seamstress",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
        "firstNight": 15, "otherNight": 8
    },
    {
        "id": "philosopher",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/philosopher.png",
        "firstNightReminder": "The Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the 'Is the Philosopher' reminder. If the character is in play, place the drunk marker by that player.",
        "otherNightReminder": "If the Philosopher has not used their ability: the Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the 'Is the Philosopher' reminder. If the character is in play, place the drunk marker by that player.",
        "reminders": ["Drunk",
            "Is the Philosopher"], "name": "Philosopher",
        "team": "townsfolk",
        "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
        "firstNight": 16, "otherNight": 9
    },
    {
        "id": "artist",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/artist.png",
        "reminders": ["No ability"], "name": "Artist",
        "team": "townsfolk",
        "ability": "Once per game, during the day, privately ask the Storyteller any yes/no question."
    },
    {
        "id": "juggler",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/juggler.png",
        "otherNightReminder": "If today was the Juggler\u2019s first day: Show the hand signal for the number (0, 1, 2, etc.) of 'Correct' markers. Remove markers.",
        "reminders": ["Correct"], "name": "Juggler",
        "team": "townsfolk",
        "ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
        "otherNight": 10
    },
    {
        "id": "sage",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/sage.png",
        "otherNightReminder": "If the Sage was killed by a Demon: Point to two players, one of which is that Demon.",
        "name": "Sage",
        "team": "townsfolk",
        "ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
        "otherNight": 11
    },
    {
        "id": "mutant",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/mutant.png",
        "name": "Mutant",
        "team": "outsider",
        "ability": "If you are \u201cmad\u201d about being an Outsider, you might be executed."
    },
    {
        "id": "sweetheart",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/sweetheart.png",
        "otherNightReminder": "Choose a player that is drunk.",
        "reminders": ["Drunk"], "name": "Sweetheart",
        "team": "outsider",
        "ability": "When you die, 1 player is drunk from now on.",
        "otherNight": 12
    },
    {
        "id": "barber",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/barber.png",
        "otherNightReminder": "If the Barber died today: Wake the Demon. Show the 'This character selected you' card, then Barber token. The Demon either shows a 'no' head signal, or points to 2 players. If they chose players: Swap the character tokens. Wake each player. Show 'You are', then their new character token.",
        "reminders": ["Haircuts tonight"], "name": "Barber",
        "team": "outsider",
        "ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
        "otherNight": 13
    },
    {
        "id": "klutz",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/klutz.png",
        "name": "Klutz",
        "team": "outsider",
        "ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."
    },
    {
        "id": "eviltwin",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/eviltwin.png",
        "firstNightReminder": "Wake the Evil Twin and their twin. Confirm that they have acknowledged each other. Point to the Evil Twin. Show their Evil Twin token to the twin player. Point to the twin. Show their character token to the Evil Twin player.",
        "reminders": ["Twin"], "name": "Evil Twin",
        "team": "minion",
        "ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
        "firstNight": 17
    },
    {
        "id": "witch",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/witch.png",
        "firstNightReminder": "The Witch points to a player. If that player nominates tomorrow they die immediately.",
        "otherNightReminder": "If there are 4 or more players alive: The Witch points to a player. If that player nominates tomorrow they die immediately.",
        "reminders": ["Cursed"], "name": "Witch",
        "team": "minion",
        "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
        "firstNight": 18, "otherNight": 14
    },
    {
        "id": "cerenovus",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/cerenovus.png",
        "firstNightReminder": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
        "otherNightReminder": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
        "reminders": ["Mad"], "name": "Cerenovus",
        "team": "minion",
        "ability": "Each night, choose a player & a good character: they are \u201cmad\u201d they are this character tomorrow, or might be executed.",
        "firstNight": 19, "otherNight": 15
    },
    {
        "id": "fanggu",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/fanggu.png",
        "otherNightReminder": "The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the 'You are' card, then the Fang Gu token. Show the 'You are' card, then the thumb-down 'evil' hand sign.",
        "reminders": ["Dead",
            "Once"], "setup": true, "name": "Fang Gu",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
        "otherNight": 16
    },
    {
        "id": "vigormortis",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/vigormortis.png",
        "otherNightReminder": "The Vigormortis points to a player. That player dies. If a Minion, they keep their ability and one of their Townsfolk neighbours is poisoned.",
        "reminders": ["Dead",
            "Has ability",
            "Poisoned"], "setup": true, "name": "Vigormortis",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbour. [\u22121 Outsider]",
        "otherNight": 17
    },
    {
        "id": "nodashii",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/nodashii.png",
        "otherNightReminder": "The No Dashii points to a player. That player dies.",
        "reminders": ["Dead",
            "Poisoned"], "name": "No Dashii",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned.",
        "otherNight": 18
    },
    {
        "id": "vortox",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/vortox.png",
        "otherNightReminder": "The Vortox points to a player. That player dies.",
        "reminders": ["Dead"], "name": "Vortox",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
        "otherNight": 19
    },
    {
        "id": "barista",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/barista.png",
        "firstNightReminder": "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
        "otherNightReminder": "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
        "reminders": ["Sober & Healthy",
            "Ability twice"], "name": "Barista",
        "team": "traveler",
        "ability": "Each night, until dusk, 1) a player becomes sober, healthy and gets true info, or 2) their ability works twice. They learn which.",
        "firstNight": 20, "otherNight": 20
    },
    {
        "id": "harlot",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/harlot.png",
        "otherNightReminder": "The Harlot points at any player. Then, put the Harlot to sleep. Wake the chosen player, show them the 'This character selected you' token, then the Harlot token. That player either nods their head yes or shakes their head no. If they nodded their head yes, wake the Harlot and show them the chosen player's character token. Then, you may decide that both players die.",
        "reminders": ["Dead"], "name": "Harlot",
        "team": "traveler",
        "ability": "Each night*, choose a living player: if they agree, you learn their character, but you both might die.",
        "otherNight": 21
    },
    {
        "id": "butcher",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/butcher.png",
        "name": "Butcher",
        "team": "traveler",
        "ability": "Each day, after the 1st execution, you may nominate again."
    },
    {
        "id": "bonecollector",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/bonecollector.png",
        "otherNightReminder": "The Bone Collector either shakes their head no or points at any dead player. If they pointed at any dead player, put the Bone Collector's 'Has Ability' reminder by the chosen player's character token. (They may need to be woken tonight to use it.)",
        "reminders": ["No ability",
            "Has ability"], "name": "Bone Collector",
        "team": "traveler",
        "ability": "Once per game, at night, choose a dead player: they regain their ability until dusk.",
        "otherNight": 22
    },
    {
        "id": "deviant",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/snv/deviant.png",
        "name": "Deviant",
        "team": "traveler",
        "ability": "If you were funny today, you cannot die by exile."
    },
    {
        "id": "_meta",
        "name": "Trouble Brewing",
        "author": "The Pandemonium Institute",
        "almanac": "https://wiki.bloodontheclocktower.com/Trouble_Brewing"
    },
    {
        "id": "washerwoman",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/washerwoman_tb.png",
        "firstNightReminder": "Show the character token of a Townsfolk in play. Point to two players, one of which is that character.",
        "reminders": [
            "Townsfolk",
            "Wrong"
        ],
        "name": "Washerwoman",
        "team": "townsfolk",
        "ability": "You start knowing that 1 of 2 players is a particular Townsfolk.",
        "firstNight": 11,
        "SAOpos": 1
    },
    {
        "id": "librarian",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/librarian_tb.png",
        "firstNightReminder": "Show the character token of an Outsider in play. Point to two players, one of which is that character.",
        "reminders": [
            "Outsider",
            "Wrong"
        ],
        "name": "Librarian",
        "team": "townsfolk",
        "ability": "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
        "firstNight": 12,
        "SAOpos": 1
    },
    {
        "id": "investigator",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/investigator_tb.png",
        "firstNightReminder": "Show the character token of a Minion in play. Point to two players, one of which is that character.",
        "reminders": [
            "Minion",
            "Wrong"
        ],
        "name": "Investigator",
        "team": "townsfolk",
        "ability": "You start knowing that 1 of 2 players is a particular Minion.",
        "firstNight": 13,
        "SAOpos": 1
    },
    {
        "id": "chef",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/chef_tb.png",
        "firstNightReminder": "Show the finger signal (0, 1, 2, \u2026) for the number of pairs of neighbouring evil players.",
        "name": "Chef",
        "team": "townsfolk",
        "ability": "You start knowing how many pairs of evil players there are.",
        "firstNight": 14,
        "SAOpos": 1
    },
    {
        "id": "empath",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/empath_tb.png",
        "firstNightReminder": "Show the finger signal (0, 1, 2) for the number of evil alive neighbours of the Empath.",
        "otherNightReminder": "Show the finger signal (0, 1, 2) for the number of evil neighbours.",
        "name": "Empath",
        "team": "townsfolk",
        "ability": "Each night, you learn how many of your 2 alive neighbours are evil.",
        "firstNight": 15,
        "otherNight": 2,
        "SAOpos": 2
    },
    {
        "id": "fortuneteller",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/fortuneteller_tb.png",
        "firstNightReminder": "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
        "otherNightReminder": "The Fortune Teller points to two players. Show the head signal (nod 'yes', shake 'no') for whether one of those players is the Demon.",
        "reminders": [
            "Red herring"
        ],
        "name": "Fortune Teller",
        "team": "townsfolk",
        "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
        "firstNight": 16,
        "otherNight": 3,
        "SAOpos": 2
    },
    {
        "id": "undertaker",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/undertaker_tb.png",
        "otherNightReminder": "If a player was executed today: Show that player\u2019s character token.",
        "reminders": [
            "Executed"
        ],
        "name": "Undertaker",
        "team": "townsfolk",
        "ability": "Each night*, you learn which character died by execution today.",
        "otherNight": 4,
        "SAOpos": 3
    },
    {
        "id": "monk",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/monk_tb.png",
        "otherNightReminder": "The previously protected player is no longer protected. The Monk points to a player not themself. Mark that player 'Protected'.",
        "reminders": [
            "Protected"
        ],
        "name": "Monk",
        "team": "townsfolk",
        "ability": "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
        "otherNight": 5,
        "SAOpos": 3
    },
    {
        "id": "ravenkeeper",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/ravenkeeper_tb.png",
        "otherNightReminder": "If the Ravenkeeper died tonight: The Ravenkeeper points to a player. Show that player\u2019s character token.",
        "name": "Ravenkeeper",
        "team": "townsfolk",
        "ability": "If you die at night, you are woken to choose a player: you learn their character.",
        "otherNight": 6,
        "SAOpos": 6
    },
    {
        "id": "virgin",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/virgin_tb.png",
        "reminders": [
            "No ability"
        ],
        "name": "Virgin",
        "team": "townsfolk",
        "ability": "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
        "SAOpos": 5
    },
    {
        "id": "slayer",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/slayer_tb.png",
        "reminders": [
            "No ability"
        ],
        "name": "Slayer",
        "team": "townsfolk",
        "ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
        "SAOpos": 5
    },
    {
        "id": "soldier",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/soldier_tb.png",
        "name": "Soldier",
        "team": "townsfolk",
        "ability": "You are safe from the Demon."
    },
    {
        "id": "mayor",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/mayor_tb.png",
        "name": "Mayor",
        "team": "townsfolk",
        "ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
        "SAOpos": 6
    },
    {
        "id": "butler",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/butler_tb.png",
        "firstNightReminder": "The Butler points to a player. Mark that player as 'Master'.",
        "otherNightReminder": "The Butler points to a player. Mark that player as 'Master'.",
        "reminders": [
            "Master"
        ],
        "name": "Butler",
        "team": "outsider",
        "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
        "firstNight": 17,
        "otherNight": 7,
        "SAOpos": 2
    },
    {
        "id": "drunk",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/drunk_tb.png",
        "remindersGlobal": [
            "Drunk"
        ],
        "setup": true,
        "name": "Drunk",
        "team": "outsider",
        "ability": "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
        "SAOpos": 6
    },
    {
        "id": "recluse",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/recluse_tb.png",
        "name": "Recluse",
        "team": "outsider",
        "ability": "You might register as evil & as a Minion or Demon, even if dead.",
        "SAOpos": 6
    },
    {
        "id": "saint",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/saint_tb.png",
        "name": "Saint",
        "team": "outsider",
        "ability": "If you die by execution, your team loses.",
        "SAOpos": 6
    },
    {
        "id": "poisoner",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/poisoner_tb.png",
        "firstNightReminder": "The Poisoner points to a player. That player is poisoned.",
        "otherNightReminder": "The previously poisoned player is no longer poisoned. The Poisoner points to a player. That player is poisoned.",
        "reminders": [
            "Poisoned"
        ],
        "name": "Poisoner",
        "team": "minion",
        "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
        "firstNight": 18,
        "otherNight": 8,
        "SAOpos": 2
    },
    {
        "id": "spy",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/spy_tb.png",
        "firstNightReminder": "Show the Grimoire to the Spy for as long as they need.",
        "otherNightReminder": "Show the Grimoire to the Spy for as long as they need.",
        "name": "Spy",
        "team": "minion",
        "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
        "firstNight": 19,
        "otherNight": 9,
        "SAOpos": 2
    },
    {
        "id": "scarletwoman",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/scarletwoman_tb.png",
        "otherNightReminder": "If the Scarlet Woman became the Demon today: Show the 'You are' card, then the demon token.",
        "reminders": [
            "Demon"
        ],
        "name": "Scarlet Woman",
        "team": "minion",
        "ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don\u2019t count)",
        "otherNight": 10,
        "SAOpos": 6
    },
    {
        "id": "baron",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/baron_tb.png",
        "setup": true,
        "name": "Baron",
        "team": "minion",
        "ability": "There are extra Outsiders in play. [+2 Outsiders]",
        "SAOpos": 6
    },
    {
        "id": "imp",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/imp_tb.png",
        "otherNightReminder": "The Imp points to a player. That player dies. If the Imp chose themselves: Replace the character of 1 alive minion with a spare Imp token. Show the 'You are' card, then the Imp token.",
        "reminders": [
            "Dead"
        ],
        "name": "Imp",
        "team": "demon",
        "ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
        "otherNight": 11,
        "SAOpos": 3
    },
    {
        "id": "bureaucrat",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/bureaucrat_tb.png",
        "firstNightReminder": "The Bureaucrat points to a player. Put the Bureaucrat's '3 votes' reminder by the chosen player's character token.",
        "otherNightReminder": "The Bureaucrat points to a player. Put the Bureaucrat's '3 votes' reminder by the chosen player's character token.",
        "reminders": [
            "3 votes"
        ],
        "name": "Bureaucrat",
        "team": "traveler",
        "ability": "Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.",
        "firstNight": 20,
        "otherNight": 12,
        "SAOpos": 2
    },
    {
        "id": "thief",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/thief_tb.png",
        "firstNightReminder": "The Thief points to a player. Put the Thief's 'Negative vote' reminder by the chosen player's character token.",
        "otherNightReminder": "The Thief points to a player. Put the Thief's 'Negative vote' reminder by the chosen player's character token.",
        "reminders": [
            "Negative vote"
        ],
        "name": "Thief",
        "team": "traveler",
        "ability": "Each night, choose a player (not yourself): their vote counts negatively tomorrow.",
        "firstNight": 21,
        "otherNight": 13,
        "SAOpos": 2
    },
    {
        "id": "gunslinger",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/gunslinger_tb.png",
        "name": "Gunslinger",
        "team": "traveler",
        "ability": "Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.",
        "SAOpos": 5
    },
    {
        "id": "scapegoat",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/scapegoat_tb.png",
        "name": "Scapegoat",
        "team": "traveler",
        "ability": "If a player of your alignment is executed, you might be executed instead.",
        "SAOpos": 6
    },
    {
        "id": "beggar",
        "image": "https://www.bloodstar.xyz/p/OccamBlazzer/TB/beggar_tb.png",
        "name": "Beggar",
        "team": "traveler",
        "ability": "You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment. You are sober & healthy.",
        "SAOpos": 6
    }
]