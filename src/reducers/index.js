import { combineReducers } from 'redux';
import PlayersReducer from './reducer_players';
import ActivePlayer from './reducer_active_player';

const rootReducer = combineReducers({
  players: PlayersReducer,
  activePlayer: ActivePlayer
});

export default rootReducer;
