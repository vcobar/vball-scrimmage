import React, { Component } from 'react';
import Player from './player';

const PlayerList = ( {players, onPlayerSelect} ) => {

    const playerItems = players.map( (playerInfo) => {
      return (
        <Player
          onPlayerSelect  = {onPlayerSelect}
          key             = {playerInfo.id}
          playerInfo      = {playerInfo} />
      );
    });

    return (
      <div className="playerList">
        {playerItems}
      </div>
    );
}

export default PlayerList;
