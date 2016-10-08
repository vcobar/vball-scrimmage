import React, { Component } from 'react';
import PlayerList from './playerList';
import PlayerProfile from './playerProfile';

class App extends Component {
  constructor(props) {
    super(props);

    const availablePlayers = [
            { id: 1, name: 'Aaron', isActive: true }, { id: 2,  name: 'Abigail', isActive: true },
            { id: 3,  name: 'Mike', isActive: true }, { id: 4,  name: 'Michelle', isActive: false },
            { id: 5,  name: 'John', isActive: false }, { id: 6,  name: 'Jane', isActive: true },
            { id: 7,  name: 'Thomas', isActive: true }, { id: 8,  name: 'Tara', isActive: true },
            { id: 9,  name: 'Carl', isActive: true }, { id: 10,  name: 'Christine', isActive: true },
            { id: 11,  name: 'Bobby', isActive: false }, { id: 12,  name: 'Barbara', isActive: false },
            { id: 13,  name: 'Norman', isActive: false }, { id: 14,  name: 'Nancy', isActive: true },
            { id: 15,  name: 'Steve', isActive: true }, { id: 16,  name: 'Sally', isActive: true } ];

      this.state = {
                    activePlayers: availablePlayers.filter( player => player.isActive === true),
                    inactivePlayers: availablePlayers.filter( player => player.isActive === false),
                    selectedPlayerProfile: availablePlayers.filter( player => player.isActive === true)[0]
                  };

  }

  render() {
      return (
        <div>
          <h3>Playing This Week</h3>
          <div id="active-players">
            <PlayerList
              onPlayerSelect  = { selectedPlayerProfile => this.setState({selectedPlayerProfile}) }
              players         = {this.state.activePlayers} />
          </div>

          <h3>Inactive Players</h3>
          <div id="inactive-players">
            <PlayerList
              onPlayerSelect  = { selectedPlayerProfile => this.setState({selectedPlayerProfile}) }
              players         = {this.state.inactivePlayers} />
          </div>

          <div className="playerProfile">
            <PlayerProfile profile={this.state.selectedPlayerProfile} />
          </div>
        </div>
      );
  }
}

export default App;
