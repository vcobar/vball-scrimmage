var React  = require('react');
var Player = require('./player');

module.exports = React.createClass({
  render() {
    var playerProfile = this.props;
    return (
      <div key={this.props.player.id}>
        <Player {...playerProfile} />
      </div>
    )
  }
});
