import React, { Component } from 'react';
import Player from './player';

const PlayerProfile = ( { profile } ) => {
  if(!profile) {
    return <span />
  }

  return (
      <div>
        <p>
          Name: <input value={profile.name} disabled />
          <span>Edit?</span>
        </p>
      </div>
  );
}

export default PlayerProfile;
