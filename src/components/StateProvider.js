/*
  State:

  Period: { current: 5, display: 4 }

  Participants: [
    { id: 1,
      display: Occam Blazer,
      isGood: true,
      isAlive: true,
      registersGood: isGood,
      registersAlive: isAlive
      team: townsfolk
      registersAs: [ townsfolk ]
    },
    ...
  ]

  // Participant ids
  Storytellers: [ 0, ... ]

  // Participant ids
  Seats: [ 1, 2, 3, .... ]

  Script: {
    meta: {
      almanac:
      author:
      name:
    },
    characters: [
      { id:
        image:
        firstNightReminder:
        otherNightReminder:
        reminders: [ ]
        display:
        effects: [ ]
        team:
        ability:
        firstNight:
        otherNight:
        standardAmyPosition:
      },
      ...
    ]
  }

  History: [
    { message:
      id: Date
      period:
    },
    ...
  ]


  https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
  {
    posts : {
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                comments : ["comment3", "comment4", "comment5"]
            }
        },
        allIds : ["post1", "post2"]
    },
    comments : {
        byId : {
            "comment1" : {
                id : "comment1",
                author : "user2",
                comment : ".....",
            },
            "comment2" : {
                id : "comment2",
                author : "user3",
                comment : ".....",
            },
            "comment3" : {
                id : "comment3",
                author : "user3",
                comment : ".....",
            },
            "comment4" : {
                id : "comment4",
                author : "user1",
                comment : ".....",
            },
            "comment5" : {
                id : "comment5",
                author : "user3",
                comment : ".....",
            },
        },
        allIds : ["comment1", "comment2", "comment3", "comment4", "comment5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            },
            "user2" : {
                username : "user2",
                name : "User 2",
            },
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
}
*/