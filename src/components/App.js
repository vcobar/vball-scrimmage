import React, { Component } from 'react';
import PlayerList from '../containers/PlayerList';
import PlayerProfile from '../containers/PlayerProfile';

export default class App extends Component {
  render() {
      return (
        <div id="players-container">
          <h3>Bump Set Spike!</h3>
          <div id="player-list">
            <PlayerList />
          </div>
          <PlayerProfile />
        </div>
      );
  }
}
