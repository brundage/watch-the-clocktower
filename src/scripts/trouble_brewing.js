export const troubleBrewing = [
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