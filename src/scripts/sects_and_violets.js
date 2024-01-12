export const sectsAndViolets = [
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
    }]