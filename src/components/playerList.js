import React, { Component } from 'react';
import Player from './player';

const PlayerList = ( {players} ) => {

    const playerItems = players.map( (playerInfo) => {
      return <Player key={playerInfo.id} playerInfo={playerInfo} />
    });

    return (
      <div className="playerList">
        {playerItems}
      </div>
    );

}

export default PlayerList;
