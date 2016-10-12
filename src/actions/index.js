export function selectPlayer(player) {
  // selectPlayer is an ActionCreator and needs to return an action
  // an object with a type property
  return {
    type: 'PLAYER_SELECTED',
    payload: player
  };
}
