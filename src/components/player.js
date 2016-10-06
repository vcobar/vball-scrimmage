import React from 'react';

const Player = ( {playerInfo} ) => {
  const url = `player.html?id=${playerInfo.id}`;

  return (
    <div className="player">
      <div className="name"><a href={url}>{playerInfo.name}</a></div>
    </div>
  );
}

export default Player;
