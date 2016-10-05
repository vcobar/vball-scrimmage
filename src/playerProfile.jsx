var React  = require('react');
var Player = require('./player');

module.exports = React.createClass({
  render() {
    var playerProfile =  this.props.player.map(function(player){
      return <Player {...player} />
    });
    return (
      <div key={this.props.player.id}>{playerProfile}</div>
    )
  }
});
