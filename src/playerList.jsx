var React  = require('react');
var Player = require('./player');

module.exports = React.createClass({
  render() {
    var playerList = this.props.players.map(function(player){
      return <Player {...player} />
    });
    return (
      <div>{playerList}</div>
    )

  }
});
