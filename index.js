// ------------------- Team Stats ---------------------------

const team = {

  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Pete',
      lastName: 'Wheeler',
      age: 54
    },
    {
      firstName: 'Gyula',
      lastName: 'Valami',
      age: 24
    }
  ],

  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 37
    },
    {
      opponent: 'Lajos',
      teamPoints: 22,
      opponentPoints: 47
    },
    {
      opponent: 'Zsolti',
      teamPoints: 32,
      opponentPoints: 17
    }
  ],

  get games () {
    return this._games;
  },
  get players () {
    return this._players;
  },

  addPlayer (firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this._players.push(player);
  },
  addGame (opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this._games.push(game);
  }

};

team.addGame('Titans', 100, 98);
team.addGame('Knicks', 120, 60);
team.addGame('Kiskufélegyháza', 150, 8);

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team);
