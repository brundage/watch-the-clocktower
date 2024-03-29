/* {
		 id: "fortuneteller",
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
	 }
*/

/* Effects:
		Ongoing ability
		Once per game
		Change character
		Demon finder
		Gain ability
		Kill
		Die
		Choose
		Start knowing
		Each night
		Each night*
		Trigger
		Passive
		Setup ability
*/

/* Standard Amy Order:
		 0 Acts on the first night
		 1 Acts every night
		 2 Acts every night (except the first night)
		 3 Acts during the day
		 4 Once per game
		 5 Acts on a trigger OR passive
*/

const searchFishbucket = (charId) => { return fishbucket[normalizeId(charId)] }
export default searchFishbucket


const normalizeId = (id) => {
	return id.replaceAll(/[_-]/g, "")
}


const fishbucket = {
	acrobat: {
		id: "acrobat",
		"display": "Acrobat",
		"edition": "",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 39,
		"otherNightReminder": "If a good living neighbour is drunk or poisoned, the Acrobat player dies.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, if either good living neighbour is drunk or poisoned, you die.",
		"standardAmyPosition": 2
	},
	alchemist: {
		id: "alchemist",
		"display": "Alchemist",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 3,
		"firstNightReminder": "Show the Alchemist a not-in-play Minion token",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"remindersGlobal": [
			"Is the Alchemist"
		],
		"setup": false,
		"ability": "You have a not-in-play Minion ability.",
		"standardAmyPosition": 5
	},
	alhadikhia: {
		id: "alhadikhia",
		"display": "Al-Hadikhia",
		"edition": "",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 33,
		"otherNightReminder": "The Al-Hadikhia chooses 3 players. Announce the first player, wake them to nod yes to live or shake head no to die, kill or resurrect accordingly, then put to sleep and announce the next player. If all 3 are alive after this, all 3 die.",
		"reminders": [
			"1",
			"2",
			"3",
			"Chose death",
			"Chose life"
		],
		"setup": false,
		"ability": "Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
		"standardAmyPosition": 2
	},
	amnesiac: {
		id: "amnesiac",
		"display": "Amnesiac",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 32,
		"firstNightReminder": "Decide the Amnesiac's entire ability. If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
		"otherNight": 47,
		"otherNightReminder": "If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
		"reminders": [
			"?"
		],
		"setup": false,
		"ability": "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
		"standardAmyPosition": 5
	},
	apprentice: {
		id: "apprentice",
		"display": "Apprentice",
		"edition": "bmr",
		"team": "traveler",
		"firstNight": 1,
		"firstNightReminder": "Show the Apprentice the 'You are' card, then a Townsfolk or Minion token. In the Grimoire, replace the Apprentice token with that character token, and put the Apprentice's 'Is the Apprentice' reminder by that character token.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Is the Apprentice"
		],
		"setup": false,
		"ability": "On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil).",
		"standardAmyPosition": 0
	},
	artist: {
		id: "artist",
		"display": "Artist",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, during the day, privately ask the Storyteller any yes/no question.",
		"standardAmyPosition": 4
	},
	assassin: {
		id: "assassin",
		"display": "Assassin",
		"edition": "bmr",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 36,
		"otherNightReminder": "If the Assassin has not yet used their ability: The Assassin either shows the 'no' head signal, or points to a player. That player dies.",
		"reminders": [
			"Dead",
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
		"standardAmyPosition": 4
	},
	atheist: {
		id: "atheist",
		"display": "Atheist",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": true,
		"ability": "The Storyteller can break the game rules & if executed, good wins, even if you are dead. [No evil characters]",
		"standardAmyPosition": 5
	},
	balloonist: {
		id: "balloonist",
		"display": "Balloonist",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 45,
		"firstNightReminder": "Choose a character type. Point to a player whose character is of that type. Place the Balloonist's Seen reminder next to that character.",
		"otherNight": 62,
		"otherNightReminder": "Choose a character type that does not yet have a Seen reminder next to a character of that type. Point to a player whose character is of that type, if there are any. Place the Balloonist's Seen reminder next to that character.",
		"reminders": [
			"Seen Townsfolk",
			"Seen Outsider",
			"Seen Minion",
			"Seen Demon",
			"Seen Traveller"
		],
		"setup": true,
		"ability": "Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]",
		"standardAmyPosition": 1
	},
	barber: {
		id: "barber",
		"display": "Barber",
		"edition": "snv",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 40,
		"otherNightReminder": "If the Barber died today: Wake the Demon. Show the 'This character selected you' card, then Barber token. The Demon either shows a 'no' head signal, or points to 2 players. If they chose players: Swap the character tokens. Wake each player. Show 'You are', then their new character token.",
		"reminders": [
			"Haircuts tonight"
		],
		"setup": false,
		"ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
		"standardAmyPosition": 5
	},
	barista: {
		id: "barista",
		"display": "Barista",
		"edition": "snv",
		"team": "traveler",
		"firstNight": 1,
		"firstNightReminder": "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
		"otherNight": 1,
		"otherNightReminder": "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
		"reminders": [
			"Sober & Healthy",
			"Ability twice"
		],
		"setup": false,
		"ability": "Each night, until dusk, 1) a player becomes sober, healthy and gets true info, or 2) their ability works twice. They learn which.",
		"standardAmyPosition": 1
	},
	baron: {
		id: "baron",
		"display": "Baron",
		"edition": "tb",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": true,
		"ability": "There are extra Outsiders in play. [+2 Outsiders]",
		"standardAmyPosition": 5
	},
	beggar: {
		id: "beggar",
		"display": "Beggar",
		"edition": "tb",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment. You are sober & healthy.",
		"standardAmyPosition": 5
	},
	bishop: {
		id: "bishop",
		"display": "Bishop",
		"edition": "bmr",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Nominate good",
			"Nominate evil"
		],
		"setup": false,
		"ability": "Only the Storyteller can nominate. At least 1 opposite player must be nominated each day.",
		"standardAmyPosition": 5
	},
	bonecollector: {
		id: "bonecollector",
		"display": "Bone Collector",
		"edition": "snv",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 1,
		"otherNightReminder": "The Bone Collector either shakes their head no or points at any dead player. If they pointed at any dead player, put the Bone Collector's 'Has Ability' reminder by the chosen player's character token. (They may need to be woken tonight to use it.)",
		"reminders": [
			"No ability",
			"Has ability"
		],
		"setup": false,
		"ability": "Once per game, at night, choose a dead player: they regain their ability until dusk.",
		"standardAmyPosition": 4
	},
	boomdandy: {
		id: "boomdandy",
		"display": "Boomdandy",
		"edition": "",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them dies.",
		"standardAmyPosition": 5
	},
	bountyhunter: {
		id: "bountyhunter",
		"display": "Bounty Hunter",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 46,
		"firstNightReminder": "Point to 1 evil player. Wake the townsfolk who is evil and show them the 'You are' card and the thumbs down evil sign.",
		"otherNight": 64,
		"otherNightReminder": "If the known evil player has died, point to another evil player. ",
		"reminders": [
			"Known"
		],
		"setup": true,
		"ability": "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
		"standardAmyPosition": 0
	},
	bureaucrat: {
		id: "bureaucrat",
		"display": "Bureaucrat",
		"edition": "tb",
		"team": "traveler",
		"firstNight": 1,
		"firstNightReminder": "The Bureaucrat points to a player. Put the Bureaucrat's '3 votes' reminder by the chosen player's character token.",
		"otherNight": 1,
		"otherNightReminder": "The Bureaucrat points to a player. Put the Bureaucrat's '3 votes' reminder by the chosen player's character token.",
		"reminders": [
			"3 votes"
		],
		"setup": false,
		"ability": "Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.",
		"standardAmyPosition": 1
	},
	butcher: {
		id: "butcher",
		"display": "Butcher",
		"edition": "snv",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Each day, after the 1st execution, you may nominate again.",
		"standardAmyPosition": 3
	},
	butler: {
		id: "butler",
		"display": "Butler",
		"edition": "tb",
		"team": "outsider",
		"firstNight": 39,
		"firstNightReminder": "The Butler points to a player. Mark that player as 'Master'.",
		"otherNight": 67,
		"otherNightReminder": "The Butler points to a player. Mark that player as 'Master'.",
		"reminders": [
			"Master"
		],
		"setup": false,
		"ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
		"standardAmyPosition": 1
	},
	cannibal: {
		id: "cannibal",
		"display": "Cannibal",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Poisoned",
			"Died today"
		],
		"setup": false,
		"ability": "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
		"standardAmyPosition": 5
	},
	cerenovus: {
		id: "cerenovus",
		"display": "Cerenovus",
		"edition": "snv",
		"team": "minion",
		"firstNight": 25,
		"firstNightReminder": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
		"otherNight": 15,
		"otherNightReminder": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
		"reminders": [
			"Mad"
		],
		"setup": false,
		"ability": "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.",
		"standardAmyPosition": 1
	},
	chambermaid: {
		id: "chambermaid",
		"display": "Chambermaid",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 51,
		"firstNightReminder": "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
		"otherNight": 70,
		"otherNightReminder": "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
		"standardAmyPosition": 1
	},
	chef: {
		id: "chef",
		"display": "Chef",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 36,
		"firstNightReminder": "Show the finger signal (0, 1, 2, …) for the number of pairs of neighbouring evil players.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "You start knowing how many pairs of evil players there are.",
		"standardAmyPosition": 0
	},
	choirboy: {
		id: "choirboy",
		"display": "Choirboy",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 44,
		"otherNightReminder": "If the King was killed by the Demon, wake the Choirboy and point to the Demon player.",
		"reminders": [],
		"setup": true,
		"ability": "If the Demon kills the King, you learn which player is the Demon. [+ the King]",
		"standardAmyPosition": 5
	},
	clockmaker: {
		id: "clockmaker",
		"display": "Clockmaker",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 41,
		"firstNightReminder": "Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "You start knowing how many steps from the Demon to its nearest Minion.",
		"standardAmyPosition": 0
	},
	courtier: {
		id: "courtier",
		"display": "Courtier",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 19,
		"firstNightReminder": "The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
		"otherNight": 8,
		"otherNightReminder": "Reduce the remaining number of days the marked player is poisoned. If the Courtier has not yet used their ability: The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
		"reminders": [
			"Drunk 3",
			"Drunk 2",
			"Drunk 1",
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
		"standardAmyPosition": 4
	},
	cultleader: {
		id: "cultleader",
		"display": "Cult Leader",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 48,
		"firstNightReminder": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
		"otherNight": 66,
		"otherNightReminder": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.",
		"standardAmyPosition": 1
	},
	damsel: {
		id: "damsel",
		"display": "Damsel",
		"edition": "",
		"team": "outsider",
		"firstNight": 31,
		"firstNightReminder": "Wake all the Minions, show them the 'This character selected you' card and the Damsel token.",
		"otherNight": 46,
		"otherNightReminder": "If selected by the Huntsman, wake the Damsel, show 'You are' card and a not-in-play Townsfolk token.",
		"reminders": [
			"Guess used"
		],
		"setup": false,
		"ability": "All Minions know you are in play. If a Minion publicly guesses you (once), your team loses.",
		"standardAmyPosition": 5
	},
	deviant: {
		id: "deviant",
		"display": "Deviant",
		"edition": "snv",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If you were funny today, you cannot die by exile.",
		"standardAmyPosition": 5
	},
	devilsadvocate: {
		id: "devilsadvocate",
		"display": "Devil's Advocate",
		"edition": "bmr",
		"team": "minion",
		"firstNight": 22,
		"firstNightReminder": "The Devil’s Advocate points to a living player. That player survives execution tomorrow.",
		"otherNight": 13,
		"otherNightReminder": "The Devil’s Advocate points to a living player, different from the previous night. That player survives execution tomorrow.",
		"reminders": [
			"Survives execution"
		],
		"setup": false,
		"ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
		"standardAmyPosition": 1
	},
	dreamer: {
		id: "dreamer",
		"display": "Dreamer",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 42,
		"firstNightReminder": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
		"otherNight": 56,
		"otherNightReminder": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct.",
		"standardAmyPosition": 1
	},
	drunk: {
		id: "drunk",
		"display": "Drunk",
		"edition": "tb",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"remindersGlobal": [
			"Drunk"
		],
		"setup": true,
		"ability": "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
		"standardAmyPosition": 5
	},
	empath: {
		id: "empath",
		"display": "Empath",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 37,
		"firstNightReminder": "Show the finger signal (0, 1, 2) for the number of evil alive neighbours of the Empath.",
		"otherNight": 53,
		"otherNightReminder": "Show the finger signal (0, 1, 2) for the number of evil neighbours.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, you learn how many of your 2 alive neighbours are evil.",
		"standardAmyPosition": 1
	},
	engineer: {
		id: "engineer",
		"display": "Engineer",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 13,
		"firstNightReminder": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the You are card and the relevant character tokens.",
		"otherNight": 5,
		"otherNightReminder": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the 'You are' card and the relevant character tokens.",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night, choose which Minions or which Demon is in play.",
		"standardAmyPosition": 4
	},
	eviltwin: {
		id: "eviltwin",
		"display": "Evil Twin",
		"edition": "snv",
		"team": "minion",
		"firstNight": 23,
		"firstNightReminder": "Wake the Evil Twin and their twin. Confirm that they have acknowledged each other. Point to the Evil Twin. Show their Evil Twin token to the twin player. Point to the twin. Show their character token to the Evil Twin player.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Twin"
		],
		"setup": false,
		"ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
		"standardAmyPosition": 5
	},
	exorcist: {
		id: "exorcist",
		"display": "Exorcist",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 21,
		"otherNightReminder": "The Exorcist points to a player, different from the previous night. If that player is the Demon: Wake the Demon. Show the Exorcist token. Point to the Exorcist. The Demon does not act tonight.",
		"reminders": [
			"Chosen"
		],
		"setup": false,
		"ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
		"standardAmyPosition": 2
	},
	fanggu: {
		id: "fanggu",
		"display": "Fang Gu",
		"edition": "snv",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 29,
		"otherNightReminder": "The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the 'You are' card, then the Fang Gu token. Show the 'You are' card, then the thumb-down 'evil' hand sign.",
		"reminders": [
			"Dead",
			"Once"
		],
		"setup": true,
		"ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
		"standardAmyPosition": 2
	},
	farmer: {
		id: "farmer",
		"display": "Farmer",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 48,
		"otherNightReminder": "If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the 'You are' card and the Farmer character token.",
		"reminders": [],
		"setup": false,
		"ability": "If you die at night, an alive good player becomes a Farmer.",
		"standardAmyPosition": 5
	},
	fearmonger: {
		id: "fearmonger",
		"display": "Fearmonger",
		"edition": "",
		"team": "minion",
		"firstNight": 26,
		"firstNightReminder": "The Fearmonger points to a player. Place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
		"otherNight": 17,
		"otherNightReminder": "The Fearmonger points to a player. If different from the previous night, place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
		"reminders": [
			"Fear"
		],
		"setup": false,
		"ability": "Each night, choose a player. If you nominate & execute them, their team loses. All players know if you choose a new player.",
		"standardAmyPosition": 1
	},
	fisherman: {
		id: "fisherman",
		"display": "Fisherman",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, during the day, visit the Storyteller for some advice to help you win.",
		"standardAmyPosition": 4
	},
	flowergirl: {
		id: "flowergirl",
		"display": "Flowergirl",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 57,
		"otherNightReminder": "Nod 'yes' or shake head 'no' for whether the Demon voted today. Place the 'Demon not voted' marker (remove 'Demon voted', if any).",
		"reminders": [
			"Demon voted",
			"Demon not voted"
		],
		"setup": false,
		"ability": "Each night*, you learn if a Demon voted today.",
		"standardAmyPosition": 2
	},
	fool: {
		id: "fool",
		"display": "Fool",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "The first time you die, you don't.",
		"standardAmyPosition": 5
	},
	fortuneteller: {
		id: "fortuneteller",
		"display": "Fortune Teller",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 38,
		"firstNightReminder": "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
		"otherNight": 54,
		"otherNightReminder": "The Fortune Teller points to two players. Show the head signal (nod 'yes', shake 'no') for whether one of those players is the Demon.",
		"reminders": [
			"Red herring"
		],
		"setup": false,
		"ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
		"standardAmyPosition": 1
	},
	gambler: {
		id: "gambler",
		"display": "Gambler",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 10,
		"otherNightReminder": "The Gambler points to a player, and a character on their sheet. If incorrect, the Gambler dies.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, choose a player & guess their character: if you guess wrong, you die.",
		"standardAmyPosition": 2
	},
	gangster: {
		id: "gangster",
		"display": "Gangster",
		"edition": "",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Once per day, you may choose to kill an alive neighbour, if your other alive neighbour agrees.",
		"standardAmyPosition": 3
	},
	general: {
		id: "general",
		"display": "General",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 50,
		"firstNightReminder": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
		"otherNight": 69,
		"otherNightReminder": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
		"standardAmyPosition": 1
	},
	goblin: {
		id: "goblin",
		"display": "Goblin",
		"edition": "",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Claimed"
		],
		"setup": false,
		"ability": "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.",
		"standardAmyPosition": 5
	},
	godfather: {
		id: "godfather",
		"display": "Godfather",
		"edition": "bmr",
		"team": "minion",
		"firstNight": 21,
		"firstNightReminder": "Show each of the Outsider tokens in play.",
		"otherNight": 37,
		"otherNightReminder": "If an Outsider died today: The Godfather points to a player. That player dies.",
		"reminders": [
			"Died today",
			"Dead"
		],
		"setup": true,
		"ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
		"standardAmyPosition": 0
	},
	golem: {
		id: "golem",
		"display": "Golem",
		"edition": "",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Can not nominate"
		],
		"setup": false,
		"ability": "You may only nominate once per game. When you do, if the nominee is not the Demon, they die.",
		"standardAmyPosition": 4
	},
	goon: {
		id: "goon",
		"display": "Goon",
		"edition": "bmr",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Drunk"
		],
		"setup": false,
		"ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
		"standardAmyPosition": 1
	},
	gossip: {
		id: "gossip",
		"display": "Gossip",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 38,
		"otherNightReminder": "If the Gossip’s public statement was true: Choose a player not protected from dying tonight. That player dies.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
		"standardAmyPosition": 3
	},
	grandmother: {
		id: "grandmother",
		"display": "Grandmother",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 40,
		"firstNightReminder": "Show the marked character token. Point to the marked player.",
		"otherNight": 51,
		"otherNightReminder": "If the Grandmother’s grandchild was killed by the Demon tonight: The Grandmother dies.",
		"reminders": [
			"Grandchild"
		],
		"setup": false,
		"ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
		"standardAmyPosition": 0
	},
	gunslinger: {
		id: "gunslinger",
		"display": "Gunslinger",
		"edition": "tb",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.",
		"standardAmyPosition": 3
	},
	harlot: {
		id: "harlot",
		"display": "Harlot",
		"edition": "snv",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 1,
		"otherNightReminder": "The Harlot points at any player. Then, put the Harlot to sleep. Wake the chosen player, show them the 'This character selected you' token, then the Harlot token. That player either nods their head yes or shakes their head no. If they nodded their head yes, wake the Harlot and show them the chosen player's character token. Then, you may decide that both players die.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, choose a living player: if they agree, you learn their character, but you both might die.",
		"standardAmyPosition": 2
	},
	heretic: {
		id: "heretic",
		"display": "Heretic",
		"edition": "",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Whoever wins, loses & whoever loses, wins, even if you are dead.",
		"standardAmyPosition": 5
	},
	huntsman: {
		id: "huntsman",
		"display": "Huntsman",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 30,
		"firstNightReminder": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
		"otherNight": 45,
		"otherNightReminder": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
		"reminders": [
			"No ability"
		],
		"setup": true,
		"ability": "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
		"standardAmyPosition": 4
	},
	imp: {
		id: "imp",
		"display": "Imp",
		"edition": "tb",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 24,
		"otherNightReminder": "The Imp points to a player. That player dies. If the Imp chose themselves: Replace the character of 1 alive minion with a spare Imp token. Show the 'You are' card, then the Imp token.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
		"standardAmyPosition": 2
	},
	innkeeper: {
		id: "innkeeper",
		"display": "Innkeeper",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 9,
		"otherNightReminder": "The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.",
		"reminders": [
			"Protected",
			"Drunk"
		],
		"setup": false,
		"ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
		"standardAmyPosition": 2
	},
	investigator: {
		id: "investigator",
		"display": "Investigator",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 35,
		"firstNightReminder": "Show the character token of a Minion in play. Point to two players, one of which is that character.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Minion",
			"Wrong"
		],
		"setup": false,
		"ability": "You start knowing that 1 of 2 players is a particular Minion.",
		"standardAmyPosition": 0
	},
	judge: {
		id: "judge",
		"display": "Judge",
		"edition": "bmr",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, if another player nominated, you may choose to force the current execution to pass or fail.",
		"standardAmyPosition": 4
	},
	juggler: {
		id: "juggler",
		"display": "Juggler",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 61,
		"otherNightReminder": "If today was the Juggler’s first day: Show the hand signal for the number (0, 1, 2, etc.) of 'Correct' markers. Remove markers.",
		"reminders": [
			"Correct"
		],
		"setup": false,
		"ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
		"standardAmyPosition": 4
	},
	king: {
		id: "king",
		"display": "King",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 10,
		"firstNightReminder": "Wake the Demon, show them the 'This character selected you' card, show the King token and point to the King player.",
		"otherNight": 63,
		"otherNightReminder": "If there are more dead than living, show the King a character token of a living player.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, if the dead outnumber the living, you learn 1 alive character. The Demon knows who you are.",
		"standardAmyPosition": 1
	},
	klutz: {
		id: "klutz",
		"display": "Klutz",
		"edition": "snv",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
		"standardAmyPosition": 5
	},
	knight: {
		id: "knight",
		display: "Knight",
		edition: "custom",
		team: "townsfolk",
		firstNight: 41,
		reminders: ["Know"],
		setup: false,
		ability: "You start knowing two players that are not the demon",
		standardAmyPosition: 0
	},
	legion: {
		id: "legion",
		"display": "Legion",
		"edition": "",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 23,
		"otherNightReminder": "Choose a player, that player dies.",
		"reminders": [
			"Dead",
			"About to die"
		],
		"setup": true,
		"ability": "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
		"standardAmyPosition": 2
	},
	leviathan: {
		id: "leviathan",
		"display": "Leviathan",
		"edition": "",
		"team": "demon",
		"firstNight": 54,
		"firstNightReminder": "Place the Leviathan 'Day 1' marker. Announce 'The Leviathan is in play; this is Day 1.'",
		"otherNight": 73,
		"otherNightReminder": "Change the Leviathan Day reminder for the next day.",
		"reminders": [
			"Day 1",
			"Day 2",
			"Day 3",
			"Day 4",
			"Day 5",
			"Good player executed"
		],
		"setup": false,
		"ability": "If more than 1 good player is executed, you win. All players know you are in play. After day 5, evil wins.",
		"standardAmyPosition": 5
	},
	librarian: {
		id: "librarian",
		"display": "Librarian",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 34,
		"firstNightReminder": "Show the character token of an Outsider in play. Point to two players, one of which is that character.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Outsider",
			"Wrong"
		],
		"setup": false,
		"ability": "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
		"standardAmyPosition": 0
	},
	lilmonsta: {
		id: "lilmonsta",
		"display": "Lil' Monsta",
		"edition": "",
		"team": "demon",
		"firstNight": 15,
		"firstNightReminder": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta.",
		"otherNight": 35,
		"otherNightReminder": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta. Choose a player, that player dies.",
		"reminders": [],
		"remindersGlobal": [
			"Is the Demon",
			"Dead"
		],
		"setup": true,
		"ability": "Each night, Minions choose who babysits Lil' Monsta's token & \"is the Demon\". A player dies each night*. [+1 Minion]",
		"standardAmyPosition": 1
	},
	lleech: {
		id: "lleech",
		"display": "Lleech",
		"edition": "",
		"team": "demon",
		"firstNight": 16,
		"firstNightReminder": "The Lleech points to a player. Place the Poisoned reminder token.",
		"otherNight": 34,
		"otherNightReminder": "The Lleech points to a player. That player dies.",
		"reminders": [
			"Dead",
			"Poisoned"
		],
		"setup": false,
		"ability": "Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die.",
		"standardAmyPosition": 2
	},
	lunatic: {
		id: "lunatic",
		"display": "Lunatic",
		"edition": "bmr",
		"team": "outsider",
		"firstNight": 8,
		"firstNightReminder": "If 7 or more players: Show the Lunatic a number of arbitrary 'Minions', players equal to the number of Minions in play. Show 3 character tokens of arbitrary good characters. If the token received by the Lunatic is a Demon that would wake tonight: Allow the Lunatic to do the Demon actions. Place their 'attack' markers. Wake the Demon. Show the Demon’s real character token. Show them the Lunatic player. If the Lunatic attacked players: Show the real demon each marked player. Remove any Lunatic 'attack' markers.",
		"otherNight": 20,
		"otherNightReminder": "Allow the Lunatic to do the actions of the Demon. Place their 'attack' markers. If the Lunatic selected players: Wake the Demon. Show the 'attack' marker, then point to each marked player. Remove any Lunatic 'attack' markers.",
		"reminders": [
			"Attack 1",
			"Attack 2",
			"Attack 3"
		],
		"setup": false,
		"ability": "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
		"standardAmyPosition": 5
	},
	lycanthrope: {
		id: "lycanthrope",
		"display": "Lycanthrope",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 22,
		"otherNightReminder": "The Lycanthrope points to a living player: if good, they die and no one else can die tonight.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, choose a living player: if good, they die, but they are the only player that can die tonight.",
		"standardAmyPosition": 2
	},
	magician: {
		id: "magician",
		"display": "Magician",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 5,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "The Demon thinks you are a Minion. Minions think you are a Demon.",
		"standardAmyPosition": 5
	},
	marionette: {
		id: "marionette",
		"display": "Marionette",
		"edition": "",
		"team": "minion",
		"firstNight": 12,
		"firstNightReminder": "Select one of the good players next to the Demon and place the Is the Marionette reminder token. Wake the Demon and show them the Marionette.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"remindersGlobal": [
			"Is the Marionette"
		],
		"setup": true,
		"ability": "You think you are a good character but you are not. The Demon knows who you are. [You neighbour the Demon]",
		"standardAmyPosition": 5
	},
	mastermind: {
		id: "mastermind",
		"display": "Mastermind",
		"edition": "bmr",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.",
		"standardAmyPosition": 5
	},
	mathematician: {
		id: "mathematician",
		"display": "Mathematician",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 52,
		"firstNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
		"otherNight": 71,
		"otherNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
		"reminders": [
			"Abnormal"
		],
		"setup": false,
		"ability": "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character's ability.",
		"standardAmyPosition": 1
	},
	matron: {
		id: "matron",
		"display": "Matron",
		"edition": "bmr",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private.",
		"standardAmyPosition": 3
	},
	mayor: {
		id: "mayor",
		"display": "Mayor",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
		"standardAmyPosition": 5
	},
	mephit: {
		id: "mephit",
		"display": "Mephit",
		"edition": "",
		"team": "minion",
		"firstNight": 27,
		"firstNightReminder": "Show the Mephit their secret word.",
		"otherNight": 18,
		"otherNightReminder": "Wake the 1st good player that said the Mephit's secret word and show them the 'You are' card and the thumbs down evil signal.",
		"reminders": [
			"Turns evil",
			"No ability"
		],
		"setup": false,
		"ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
		"standardAmyPosition": 5
	},
	mezepheles: {
		id: "mezepheles",
		"display": "Mezepheles",
		"edition": "",
		"team": "minion",
		"firstNight": 27,
		"firstNightReminder": "Show the Mezepheles their secret word.",
		"otherNight": 18,
		"otherNightReminder": "Wake the 1st good player that said the Mezepheles' secret word and show them the 'You are' card and the thumbs down evil signal.",
		"reminders": [
			"Turns evil",
			"No ability"
		],
		"setup": false,
		"ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
		"standardAmyPosition": 5
	},
	minstrel: {
		id: "minstrel",
		"display": "Minstrel",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Everyone drunk"
		],
		"setup": false,
		"ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
		"standardAmyPosition": 5
	},
	monk: {
		id: "monk",
		"display": "Monk",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 12,
		"otherNightReminder": "The previously protected player is no longer protected. The Monk points to a player not themself. Mark that player 'Protected'.",
		"reminders": [
			"Protected"
		],
		"setup": false,
		"ability": "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
		"standardAmyPosition": 2
	},
	moonchild: {
		id: "moonchild",
		"display": "Moonchild",
		"edition": "bmr",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 50,
		"otherNightReminder": "If the Moonchild used their ability to target a player today: If that player is good, they die.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
		"standardAmyPosition": 5
	},
	mutant: {
		id: "mutant",
		"display": "Mutant",
		"edition": "snv",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If you are “mad” about being an Outsider, you might be executed.",
		"standardAmyPosition": 5
	},
	nightwatchman: {
		id: "nightwatchman",
		"display": "Nightwatchman",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 47,
		"firstNightReminder": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
		"otherNight": 65,
		"otherNightReminder": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night, choose a player: they learn who you are.",
		"standardAmyPosition": 4
	},
	noble: {
		id: "noble",
		"display": "Noble",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 44,
		"firstNightReminder": "Point to 3 players including one evil player, in no particular order.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Seen"
		],
		"setup": false,
		"ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
		"standardAmyPosition": 0
	},
	nodashii: {
		id: "nodashii",
		"display": "No Dashii",
		"edition": "snv",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 30,
		"otherNightReminder": "The No Dashii points to a player. That player dies.",
		"reminders": [
			"Dead",
			"Poisoned"
		],
		"setup": false,
		"ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned.",
		"standardAmyPosition": 2
	},
	oracle: {
		id: "oracle",
		"display": "Oracle",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 59,
		"otherNightReminder": "Show the hand signal for the number (0, 1, 2, etc.) of dead evil players.",
		"reminders": [],
		"setup": false,
		"ability": "Each night*, you learn how many dead players are evil.",
		"standardAmyPosition": 2
	},
	pacifist: {
		id: "pacifist",
		"display": "Pacifist",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Executed good players might not die.",
		"standardAmyPosition": 5
	},
	philosopher: {
		id: "philosopher",
		"display": "Philosopher",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 2,
		"firstNightReminder": "The Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the 'Is the Philosopher' reminder. If the character is in play, place the drunk marker by that player.",
		"otherNight": 2,
		"otherNightReminder": "If the Philosopher has not used their ability: the Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the 'Is the Philosopher' reminder. If the character is in play, place the drunk marker by that player.",
		"reminders": [
			"Drunk",
			"Is the Philosopher"
		],
		"setup": false,
		"ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
		"standardAmyPosition": 4
	},
	pithag: {
		id: "pithag",
		"display": "Pit-Hag",
		"edition": "snv",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 16,
		"otherNightReminder": "The Pit-Hag points to a player and a character on the sheet. If this character is not in play, wake that player and show them the 'You are' card and the relevant character token. If the character is in play, nothing happens.",
		"reminders": [],
		"setup": false,
		"ability": "Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary.",
		"standardAmyPosition": 2
	},
	pixie: {
		id: "pixie",
		"display": "Pixie",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 29,
		"firstNightReminder": "Show the Pixie 1 in-play Townsfolk character token.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Mad",
			"Has ability"
		],
		"setup": false,
		"ability": "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
		"standardAmyPosition": 0
	},
	po: {
		id: "po",
		"display": "Po",
		"edition": "bmr",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 28,
		"otherNightReminder": "If the Po chose no-one the previous night: The Po points to three players. Otherwise: The Po either shows the 'no' head signal , or points to a player. Chosen players die",
		"reminders": [
			"Dead",
			"3 attacks"
		],
		"setup": false,
		"ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
		"standardAmyPosition": 2
	},
	poisoner: {
		id: "poisoner",
		"display": "Poisoner",
		"edition": "tb",
		"team": "minion",
		"firstNight": 17,
		"firstNightReminder": "The Poisoner points to a player. That player is poisoned.",
		"otherNight": 7,
		"otherNightReminder": "The previously poisoned player is no longer poisoned. The Poisoner points to a player. That player is poisoned.",
		"reminders": [
			"Poisoned"
		],
		"setup": false,
		"ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
		"standardAmyPosition": 1
	},
	politician: {
		id: "politician",
		"display": "Politician",
		"edition": "",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If you were the player most responsible for your team losing, you change alignment & win, even if dead.",
		"standardAmyPosition": 5
	},
	poppygrower: {
		id: "poppygrower",
		"display": "Poppy Grower",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 4,
		"firstNightReminder": "Do not inform the Demon/Minions who each other are",
		"otherNight": 3,
		"otherNightReminder": "If the Poppy Grower has died, show the Minions/Demon who each other are.",
		"reminders": [
			"Evil wakes"
		],
		"setup": false,
		"ability": "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
		"standardAmyPosition": 5
	},
	preacher: {
		id: "preacher",
		"display": "Preacher",
		"edition": "",
		"team": "townsfolk",
		"firstNight": 14,
		"firstNightReminder": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
		"otherNight": 6,
		"otherNightReminder": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
		"reminders": [
			"At a sermon"
		],
		"setup": false,
		"ability": "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
		"standardAmyPosition": 1
	},
	professor: {
		id: "professor",
		"display": "Professor",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 43,
		"otherNightReminder": "If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.",
		"reminders": [
			"Alive",
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
		"standardAmyPosition": 4
	},
	psychopath: {
		id: "psychopath",
		"display": "Psychopath",
		"edition": "",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.",
		"standardAmyPosition": 3
	},
	pukka: {
		id: "pukka",
		"display": "Pukka",
		"edition": "bmr",
		"team": "demon",
		"firstNight": 28,
		"firstNightReminder": "The Pukka points to a player. That player is poisoned.",
		"otherNight": 26,
		"otherNightReminder": "The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ",
		"reminders": [
			"Poisoned",
			"Dead"
		],
		"setup": false,
		"ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
		"standardAmyPosition": 1
	},
	puzzlemaster: {
		id: "puzzlemaster",
		"display": "Puzzlemaster",
		"edition": "",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Drunk",
			"Guess used"
		],
		"setup": false,
		"ability": "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
		"standardAmyPosition": 4
	},
	ravenkeeper: {
		id: "ravenkeeper",
		"display": "Ravenkeeper",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 52,
		"otherNightReminder": "If the Ravenkeeper died tonight: The Ravenkeeper points to a player. Show that player’s character token.",
		"reminders": [],
		"setup": false,
		"ability": "If you die at night, you are woken to choose a player: you learn their character.",
		"standardAmyPosition": 5
	},
	recluse: {
		id: "recluse",
		"display": "Recluse",
		"edition": "tb",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "You might register as evil & as a Minion or Demon, even if dead.",
		"standardAmyPosition": 5
	},
	riot: {
		id: "riot",
		"display": "Riot",
		"edition": "",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": true,
		"ability": "Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]",
		"standardAmyPosition": 5
	},
	sage: {
		id: "sage",
		"display": "Sage",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 42,
		"otherNightReminder": "If the Sage was killed by a Demon: Point to two players, one of which is that Demon.",
		"reminders": [],
		"setup": false,
		"ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
		"standardAmyPosition": 5
	},
	sailor: {
		id: "sailor",
		"display": "Sailor",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 11,
		"firstNightReminder": "The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
		"otherNight": 4,
		"otherNightReminder": "The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
		"reminders": [
			"Drunk"
		],
		"setup": false,
		"ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
		"standardAmyPosition": 1
	},
	saint: {
		id: "saint",
		"display": "Saint",
		"edition": "tb",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If you die by execution, your team loses.",
		"standardAmyPosition": 5
	},
	savant: {
		id: "savant",
		"display": "Savant",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
		"standardAmyPosition": 3
	},
	scapegoat: {
		id: "scapegoat",
		"display": "Scapegoat",
		"edition": "tb",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "If a player of your alignment is executed, you might be executed instead.",
		"standardAmyPosition": 5
	},
	scarletwoman: {
		id: "scarletwoman",
		"display": "Scarlet Woman",
		"edition": "tb",
		"team": "minion",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 19,
		"otherNightReminder": "If the Scarlet Woman became the Demon today: Show the 'You are' card, then the demon token.",
		"reminders": [
			"Demon"
		],
		"setup": false,
		"ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count)",
		"standardAmyPosition": 5
	},
	seamstress: {
		id: "seamstress",
		"display": "Seamstress",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 43,
		"firstNightReminder": "The Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
		"otherNight": 60,
		"otherNightReminder": "If the Seamstress has not yet used their ability: the Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
		"standardAmyPosition": 4
	},
	shabaloth: {
		id: "shabaloth",
		"display": "Shabaloth",
		"edition": "bmr",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 27,
		"otherNightReminder": "One player that the Shabaloth chose the previous night might be resurrected. The Shabaloth points to two players. Those players die.",
		"reminders": [
			"Dead",
			"Alive"
		],
		"setup": false,
		"ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
		"standardAmyPosition": 2
	},
	slayer: {
		id: "slayer",
		"display": "Slayer",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
		"standardAmyPosition": 4
	},
	snakecharmer: {
		id: "snakecharmer",
		"display": "Snake Charmer",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 20,
		"firstNightReminder": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
		"otherNight": 11,
		"otherNightReminder": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
		"reminders": [
			"Poisoned"
		],
		"setup": false,
		"ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
		"standardAmyPosition": 1
	},
	snitch: {
		id: "snitch",
		"display": "Snitch",
		"edition": "",
		"team": "outsider",
		"firstNight": 7,
		"firstNightReminder": "After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Minions start knowing 3 not-in-play characters.",
		"standardAmyPosition": 5
	},
	soldier: {
		id: "soldier",
		"display": "Soldier",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "You are safe from the Demon.",
		"standardAmyPosition": 5
	},
	spy: {
		id: "spy",
		"display": "Spy",
		"edition": "tb",
		"team": "minion",
		"firstNight": 49,
		"firstNightReminder": "Show the Grimoire to the Spy for as long as they need.",
		"otherNight": 68,
		"otherNightReminder": "Show the Grimoire to the Spy for as long as they need.",
		"reminders": [],
		"setup": false,
		"ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
		"standardAmyPosition": 1
	},
	sweetheart: {
		id: "sweetheart",
		"display": "Sweetheart",
		"edition": "snv",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 41,
		"otherNightReminder": "Choose a player that is drunk.",
		"reminders": [
			"Drunk"
		],
		"setup": false,
		"ability": "When you die, 1 player is drunk from now on.",
		"standardAmyPosition": 5
	},
	tealady: {
		id: "tealady",
		"display": "Tea Lady",
		"edition": "bmr",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Can not die"
		],
		"setup": false,
		"ability": "If both your alive neighbours are good, they can't die.",
		"standardAmyPosition": 5
	},
	thief: {
		id: "thief",
		"display": "Thief",
		"edition": "tb",
		"team": "traveler",
		"firstNight": 1,
		"firstNightReminder": "The Thief points to a player. Put the Thief's 'Negative vote' reminder by the chosen player's character token.",
		"otherNight": 1,
		"otherNightReminder": "The Thief points to a player. Put the Thief's 'Negative vote' reminder by the chosen player's character token.",
		"reminders": [
			"Negative vote"
		],
		"setup": false,
		"ability": "Each night, choose a player (not yourself): their vote counts negatively tomorrow.",
		"standardAmyPosition": 1
	},
	tinker: {
		id: "tinker",
		"display": "Tinker",
		"edition": "bmr",
		"team": "outsider",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 49,
		"otherNightReminder": "The Tinker might die.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "You might die at any time.",
		"standardAmyPosition": 5
	},
	towncrier: {
		id: "towncrier",
		"display": "Town Crier",
		"edition": "snv",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 58,
		"otherNightReminder": "Nod 'yes' or shake head 'no' for whether a Minion nominated today. Place the 'Minion not nominated' marker (remove 'Minion nominated', if any).",
		"reminders": [
			"Minions not nominated",
			"Minion nominated"
		],
		"setup": false,
		"ability": "Each night*, you learn if a Minion nominated today.",
		"standardAmyPosition": 2
	},
	undertaker: {
		id: "undertaker",
		"display": "Undertaker",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 55,
		"otherNightReminder": "If a player was executed today: Show that player’s character token.",
		"reminders": [
			"Executed"
		],
		"setup": false,
		"ability": "Each night*, you learn which character died by execution today.",
		"standardAmyPosition": 2
	},
	ojo: {
		id: "ojo",
		"display": "Ojo",
		"team": "demon",
		"ability": "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies."
	},
	villageidiot: {
		id: "villageidiot",
		"display": "Village Idiot",
		"team": "townsfolk"
	},
	vigormortis: {
		id: "vigormortis",
		"display": "Vigormortis",
		"edition": "snv",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 32,
		"otherNightReminder": "The Vigormortis points to a player. That player dies. If a Minion, they keep their ability and one of their Townsfolk neighbours is poisoned.",
		"reminders": [
			"Dead",
			"Has ability",
			"Poisoned"
		],
		"setup": true,
		"ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbour. [−1 Outsider]",
		"standardAmyPosition": 2
	},
	virgin: {
		id: "virgin",
		"display": "Virgin",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"No ability"
		],
		"setup": false,
		"ability": "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
		"standardAmyPosition": 5
	},
	vortox: {
		id: "vortox",
		"display": "Vortox",
		"edition": "snv",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 31,
		"otherNightReminder": "The Vortox points to a player. That player dies.",
		"reminders": [
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
		"standardAmyPosition": 2
	},
	voudon: {
		id: "voudon",
		"display": "Voudon",
		"edition": "bmr",
		"team": "traveler",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [],
		"setup": false,
		"ability": "Only you and the dead can vote. They don't need a vote token to do so. A 50% majority is not required.",
		"standardAmyPosition": 5
	},
	washerwoman: {
		id: "washerwoman",
		"display": "Washerwoman",
		"edition": "tb",
		"team": "townsfolk",
		"firstNight": 33,
		"firstNightReminder": "Show the character token of a Townsfolk in play. Point to two players, one of which is that character.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Townsfolk",
			"Wrong"
		],
		"setup": false,
		"ability": "You start knowing that 1 of 2 players is a particular Townsfolk.",
		"standardAmyPosition": 0
	},
	widow: {
		id: "widow",
		"display": "Widow",
		"edition": "",
		"team": "minion",
		"firstNight": 18,
		"firstNightReminder": "Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the 'These characters are in play' card, then the Widow character token.",
		"otherNight": 0,
		"otherNightReminder": "",
		"reminders": [
			"Poisoned"
		],
		"remindersGlobal": [
			"Knows"
		],
		"setup": false,
		"ability": "On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play.",
		"standardAmyPosition": 0
	},
	witch: {
		id: "witch",
		"display": "Witch",
		"edition": "snv",
		"team": "minion",
		"firstNight": 24,
		"firstNightReminder": "The Witch points to a player. If that player nominates tomorrow they die immediately.",
		"otherNight": 14,
		"otherNightReminder": "If there are 4 or more players alive: The Witch points to a player. If that player nominates tomorrow they die immediately.",
		"reminders": [
			"Cursed"
		],
		"setup": false,
		"ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
		"standardAmyPosition": 1
	},
	zombuul: {
		id: "zombuul",
		"display": "Zombuul",
		"edition": "bmr",
		"team": "demon",
		"firstNight": 0,
		"firstNightReminder": "",
		"otherNight": 25,
		"otherNightReminder": "If no-one died during the day: The Zombuul points to a player. That player dies.",
		"reminders": [
			"Died today",
			"Dead"
		],
		"setup": false,
		"ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
		"standardAmyPosition": 2
	},
	doomsayer: {
		id: "doomsayer",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/doomsayer.png",
		"display": "Doomsayer",
		"team": "fabled",
		"ability": "If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies."
	},
	angel: {
		id: "angel",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/angel.png",
		"reminders": ["Protect", "Something Bad"],
		"display": "Angel",
		"team": "fabled",
		"ability": "Something bad might happen to whoever is most responsible for the death of a new player."
	},
	buddhist: {
		id: "buddhist",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/buddhist.png",
		"display": "Buddhist",
		"team": "fabled",
		"ability": "For the first 2 minutes of each day, veteran players may not talk."
	},
	hellslibrarian: {
		id: "hellslibrarian",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/hellslibrarian.png",
		"reminders": ["Something Bad"],
		"display": "Hell's Librarian",
		"team": "fabled",
		"ability": "Something bad might happen to whoever talks when the Storyteller has asked for silence."
	},
	revolutionary: {
		id: "revolutionary",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/revolutionary.png",
		"reminders": ["Used"],
		"display": "Revolutionary",
		"team": "fabled",
		"ability": "2 neighboring players are known to be the same alignment. Once per game, one of them registers falsely."
	},
	fiddler: {
		id: "fiddler",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/fiddler.png",
		"display": "Fiddler",
		"team": "fabled",
		"ability": "Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win."
	},
	toymaker: {
		id: "toymaker",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/toymaker.png",
		"otherNightReminder": "If it is a night when a Demon attack could end the game, and the Demon is marked \u201cFinal night: No Attack,\u201d then the Demon does not act tonight. (Do not wake them.)",
		"reminders": ["Final Night: No Attack"],
		"display": "Toymaker",
		"team": "fabled",
		"ability": "The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info.",
		"otherNight": 2
	},
	fibbin: {
		id: "fibbin",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/fibbin.png",
		"reminders": ["Used"],
		"display": "Fibbin",
		"team": "fabled",
		"ability": "Once per game, 1 good player might get false information."
	},
	duchess: {
		id: "duchess",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/duchess.png",
		"otherNightReminder": "Wake each player marked \u201cVisitor\u201d or \u201cFalse Info\u201d one at a time. Show them the Duchess token, then fingers (1, 2, 3) equaling the number of evil players marked \u201cVisitor\u201d or, if you are waking the player marked \u201cFalse Info,\u201d show them any number of fingers except the number of evil players marked \u201cVisitor.\u201d",
		"reminders": ["Visitor",
			"False Info"],
		"display": "Duchess",
		"team": "fabled",
		"ability": "Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info.",
		"otherNight": 3
	},
	sentinel: {
		id: "sentinel",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/sentinel.png",
		"setup": true,
		"display": "Sentinel",
		"team": "fabled",
		"ability": "There might be 1 extra or 1 fewer Outsider in play."
	},
	spiritofivory: {
		id: "spiritofivory",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/spiritofivory.png",
		"reminders": ["No extra evil"],
		"display": "Spirit of Ivory",
		"team": "fabled",
		"ability": "There can't be more than 1 extra evil player."
	},
	djinn: {
		id: "djinn",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/djinn.png",
		"display": "Djinn",
		"team": "fabled",
		"ability": "Use the Djinn's special rule. All players know what it is."
	},
	stormcatcher: {
		id: "stormcatcher",
		"image": "https://www.bloodstar.xyz/p/OccamBlazzer/fabled/stormcatcher.png",
		"firstNightReminder": "Mark a good player as \"Safe\". Wake each evil player and show them the marked player.",
		"reminders": ["Safe"],
		"display": "Storm Catcher",
		"team": "fabled",
		"ability": "Name a good character. If in play, they can only die by execution, but evil players learn which player it is.",
		"firstNight": 11
	}
}