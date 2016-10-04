var PlayerList = require('./playerList');

var availablePlayers = [
      { id: 1, name: 'Victor', isActive: true },
      { id: 2,  name: 'Vivian', isActive: true },
      { id: 3,  name: 'Mike', isActive: true },
      { id: 4,  name: 'Michelle', isActive: false },
      { id: 5,  name: 'John', isActive: false },
      { id: 6,  name: 'Jane', isActive: true },
      { id: 7,  name: 'Thomas', isActive: true },
      { id: 8,  name: 'Trisha', isActive: true },
      { id: 9,  name: 'Carl', isActive: true },
      { id: 10,  name: 'Christine', isActive: true },
      { id: 11,  name: 'Bobby', isActive: false },
      { id: 12,  name: 'Barbara', isActive: false },
      { id: 13,  name: 'Norman', isActive: false },
      { id: 14,  name: 'Nancy', isActive: true },
      { id: 15,  name: 'Steve', isActive: true },
      { id: 16,  name: 'Sally', isActive: true }
  ];

ReactDOM.render(
  <PlayerList players={availablePlayers.filter(function(player){ return player.isActive === true; })} />,
  document.getElementById('active-players')
);

ReactDOM.render(
<PlayerList players={availablePlayers.filter(function(player){ return player.isActive === false; })} />,
document.getElementById('inactive-players')
);
