export function selectPlayer(player) {
  // selectPlayer is an ActionCreator and needs to return an action
  // an object with a type property
  return {
    type: 'PLAYER_SELECTED',
    payload: player
  };
}
export function closePlayer(player) {
  // selectPlayer is an ActionCreator and needs to return an action
  // an object with a type property
  return {
    type: 'PLAYER_CLOSED',
    payload: null
  };
}
export function toggleActive(player) {
  player.isActive = !player.isActive;
  return {
    type: 'ACTIVE_TOGGLED',
    payload: player
  }
}
