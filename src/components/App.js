import React, { Component } from 'react';
import PlayerList from '../containers/PlayerList';

export default class App extends Component {
  render() {
      return (
        <div>
          <h3>Players</h3>
          <div id="active-players">
            <PlayerList />
          </div>
        </div>
      );
  }
}
