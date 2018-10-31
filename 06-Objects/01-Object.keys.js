const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]


///////////////////////////////////////////////////////////
const players = [
  {name: 'Tyler McGinnis', position: 'Point Guard', teamId: 'bulls', number: 33, avatar: 'https://avatars.io/twitter/tylermcginnis', rpg: 3, spg: 4, apg: 8, ppg: 12},
  {name: 'Jared Palmer', position: 'Shooting Guard', teamId: 'bulls', number: 15, avatar: 'https://avatars.io/twitter/jaredpalmer', rpg: 5, spg: 2, apg: 4, ppg: 15},
  {name: 'Val Head', position: 'Shooting Forward', teamId: 'bulls', number: 1, avatar: 'https://avatars.io/twitter/vlh', rpg: 6, spg: 2, apg: 3, ppg: 13},
  {name: 'Dan Abramov', position: 'Power Forward', teamId: 'bulls', number: 99, avatar: 'https://avatars.io/twitter/dan_abramov', rpg: 8, spg: 1, apg: 2, ppg: 10},
  {name: 'Bonnie Eisenman', position: 'Center', teamId: 'bulls', number: 11, avatar: 'https://avatars.io/twitter/brindelle', rpg: 10, spg: 1, apg: 1, ppg: 10},
  {name: 'Kevin Lacker', position: 'Point Guard', teamId: 'foxes', number: 10, avatar: 'https://avatars.io/twitter/lacker', rpg: 3, spg: 4, apg: 8, ppg: 12},
  {name: 'Pete Hunt', position: 'Shooting Guard', teamId: 'foxes', number: 13, avatar: 'https://avatars.io/twitter/floydophone', rpg: 5, spg: 2, apg: 4, ppg: 15},
  {name: 'Sarah Drasner', position: 'Shooting Forward', teamId: 'foxes', number: 21, avatar: 'https://avatars.io/twitter/sarah_edo', rpg: 6, spg: 2, apg: 3, ppg: 13},
  {name: 'Jed Watson', position: 'Power Forward', teamId: 'foxes', number: 22, avatar: 'https://avatars.io/twitter/JedWatson', rpg: 8, spg: 1, apg: 2, ppg: 10},
  {name: 'Richard Feldman', position: 'Center', teamId: 'foxes', number: 46, avatar: 'https://avatars.io/twitter/rtfeldman', rpg: 10, spg: 1, apg: 1, ppg: 10},
  {name: 'Preethi Kasireddy', position: 'Point Guard', teamId: 'hedgehogs', number: 32, avatar: 'https://avatars.io/twitter/iam_preethi', rpg: 3, spg: 4, apg: 8, ppg: 12},
  {name: 'Ean Platter', position: 'Shooting Guard', teamId: 'hedgehogs', number: 10, avatar: 'https://avatars.io/twitter/eanplatter', rpg: 5, spg: 2, apg: 4, ppg: 15},
  {name: 'Sunil Pai', position: 'Shooting Forward', teamId: 'hedgehogs', number: 37, avatar: 'https://avatars.io/twitter/threepointone', rpg: 6, spg: 2, apg: 3, ppg: 13},
  {name: 'Pam Selle', position: 'Power Forward', teamId: 'hedgehogs', number: 76, avatar: 'https://avatars.io/twitter/pamasaur', rpg: 8, spg: 1, apg: 2, ppg: 10},
  {name: 'Mateusz Zatorski', position: 'Center', teamId: 'hedgehogs', number: 23, avatar: 'https://avatars.io/twitter/matzatorski', rpg: 10, spg: 1, apg: 1, ppg: 10},
  {name: 'Kyle Mathews', position: 'Point Guard', teamId: 'lemurs', number: 19, avatar: 'https://avatars.io/twitter/kylemathews', rpg: 3, spg: 4, apg: 8, ppg: 12},
  {name: 'Lin Clark', position: 'Shooting Guard', teamId: 'lemurs', number: 66, avatar: 'https://avatars.io/twitter/linclark', rpg: 5, spg: 2, apg: 4, ppg: 15},
  {name: 'Guillermo Rauch', position: 'Shooting Forward', teamId: 'lemurs', number: 34, avatar: 'https://avatars.io/twitter/rauchg', rpg: 6, spg: 2, apg: 3, ppg: 13},
  {name: 'Michael Chan', position: 'Power Forward', teamId: 'lemurs', number: 14, avatar: 'https://avatars.io/twitter/chantastic', rpg: 8, spg: 1, apg: 2, ppg: 10},
  {name: 'Rach Smith', position: 'Center', teamId: 'lemurs', number: 55, avatar: 'https://avatars.io/twitter/rachsmithtweets', rpg: 10, spg: 1, apg: 1, ppg: 10},
  {name: 'Tom Occhino', position: 'Point Guard', teamId: 'koalas', number: 87, avatar: 'https://avatars.io/twitter/tomocchino', rpg: 3, spg: 4, apg: 8, ppg: 12},
  {name: 'Aimee Knight', position: 'Shooting Guard', teamId: 'koalas', number: 26, avatar: 'https://avatars.io/twitter/Aimee_Knight', rpg: 5, spg: 2, apg: 4, ppg: 15},
  {name: 'Brian Holt', position: 'Shooting Forward', teamId: 'koalas', number: 36, avatar: 'https://avatars.io/twitter/holtbt', rpg: 6, spg: 2, apg: 3, ppg: 13},
  {name: 'Ben Alpert', position: 'Power Forward', teamId: 'koalas', number: 54, avatar: 'https://avatars.io/twitter/soprano', rpg: 8, spg: 1, apg: 2, ppg: 10},
  {name: 'Ken Wheeler', position: 'Center', teamId: 'koalas', number: 69, avatar: 'https://avatars.io/twitter/ken_wheeler', rpg: 10, spg: 1, apg: 1, ppg: 10},
]
const teams = {
  bulls: {
    id: 'bulls',
    name: 'Bulls',
    wins: 80,
    losses: 2,
    established: 1998,
    coach: 'Addy Osmani',
    manager: 'Todd Motto',
    championships: [1998, 1999, 2001, 2004, 2005, 2008, 2011, 2013, 2014, 2015],
    players: players.slice(0, 5),
  },
  foxes: {
    id: 'foxes',
    name: 'Foxes',
    wins: 75,
    losses: 7,
    established: 2000,
    coach: 'Rich Harris',
    manager: 'Jem Young',
    championships: [2000, 2002, 2009],
    players: players.slice(5, 10),
  },
  hedgehogs: {
    id: 'hedgehogs',
    name: 'Hedgehogs',
    wins: 72,
    losses: 10,
    established: 2002,
    coach: 'Vivian Cromwell',
    manager: 'Jafar Husain',
    championships: [2003, 2012],
    players: players.slice(10, 15),
  },
  lemurs: {
    id: 'lemurs',
    name: 'Lemurs',
    wins: 60,
    losses: 22,
    established: 2004,
    coach: 'Paul O’Shannessy',
    manager: 'Lee Byron',
    championships: [2007, 2009],
    players: players.slice(15, 20),
  },
  koalas: {
    id: 'koalas',
    name: 'Koalas',
    wins: 55,
    losses: 27,
    established: 2005,
    coach: 'David Nolen',
    manager: 'Tereza Sokol',
    championships: [2006, 2009, 2010],
    players: players.slice(20, 25),
  },
}

function getTeamNames () {
  return new Promise((res) => {
    if (cachedTeamNames === null) {
      cachedTeamNames = Object.keys(teams)
      return setTimeout(() => res(cachedTeamNames), 400)
    }

    return res(cachedTeamNames)
  })
}

let cachedTeamNames = null

getTeamNames()
  .then((teamNames) => (
    console.log('teamnames', teamNames)
  ))
