var React  = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className="player">
        <div className="name" key={this.props.id}>{this.props.name}</div>
      </div>
    );
  }
});
