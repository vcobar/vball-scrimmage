// reducers get two params: state and action
// State argument is not application state,
// only state this reducer is responsible for
// default state to null for first load
export default function(state = null, action) {
  switch(action.type) {
    case 'PLAYER_SELECTED':
      return action.payload;
    case 'PLAYER_CLOSED':
      return action.payload;
    case 'ACTIVE_TOGGLED':
      return action.payload;
      default:
  }

  return state;
}
