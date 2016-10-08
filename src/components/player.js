import React from 'react';

const Player = ( {playerInfo, onPlayerSelect} ) => {
  const url = `player.html?id=${playerInfo.id}`;

  return (
    <div className="player" onClick={ () => onPlayerSelect(playerInfo) }>
      <div className="name">{playerInfo.name}</div>
    </div>
  );
}

export default Player;
