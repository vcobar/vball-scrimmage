import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}
// var PlayerList    = require('./playerList');
// var PlayerProfile = require('./playerProfile');
//
// var availablePlayers = [
//       { id: 1, name: 'Aaron', isActive: true },
//       { id: 2,  name: 'Abigail', isActive: true },
//       { id: 3,  name: 'Mike', isActive: true },
//       { id: 4,  name: 'Michelle', isActive: false },
//       { id: 5,  name: 'John', isActive: false },
//       { id: 6,  name: 'Jane', isActive: true },
//       { id: 7,  name: 'Thomas', isActive: true },
//       { id: 8,  name: 'Trisha', isActive: true },
//       { id: 9,  name: 'Carl', isActive: true },
//       { id: 10,  name: 'Christine', isActive: true },
//       { id: 11,  name: 'Bobby', isActive: false },
//       { id: 12,  name: 'Barbara', isActive: false },
//       { id: 13,  name: 'Norman', isActive: false },
//       { id: 14,  name: 'Nancy', isActive: true },
//       { id: 15,  name: 'Steve', isActive: true },
//       { id: 16,  name: 'Sally', isActive: true }
//   ];
//
// var activePlayers = document.getElementById('active-players');
// if(activePlayers) {
//   ReactDOM.render(
//     <PlayerList players={availablePlayers.filter(function(player){ return player.isActive === true; })} />,
//     activePlayers
//   );
// }
//
// var inactivePlayers = document.getElementById('inactive-players');
// if(inactivePlayers) {
//   ReactDOM.render(
//     <PlayerList players={availablePlayers.filter(function(player){ return player.isActive === false; })} />,
//     inactivePlayers
//   );
// }
//
// var playerProfile = document.getElementById('player-profile');
// if(playerProfile) {
//   var queryString = JSON.parse('{"' + decodeURI(window.location.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
//   ReactDOM.render(
//     <PlayerProfile player={availablePlayers.filter(function(player){ return player.id == parseInt(queryString.id) })} />,
//     playerProfile
//   );
// }
