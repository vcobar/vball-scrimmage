import React from 'react';

const Player = ( {playerInfo, onPlayerSelect} ) => {

  return (
    <div className="player" onClick={ () => onPlayerSelect(playerInfo) }>
      <div className="name">{playerInfo.name}</div>
    </div>
  );
}

export default Player;
