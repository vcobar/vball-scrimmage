var React  = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className="player">
        <div className="name" key={this.props.id}>{this.props.name}</div>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
        <i className="fa fa-minus-circle" aria-hidden="true"></i>
      </div>
    );
  }
});
