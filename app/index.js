var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired  
}

ReactDOM.render(
  <Badge
    img = "https://avatars3.githubusercontent.com/u/18619005?v=3&s=460"
    name = "Anastasiia"
    username = "Sestri4kina"
   />,
  document.getElementById('app')
);
