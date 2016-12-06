var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
<div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active">Pylon</IndexLink>
    <Link to="/about" activeClassName="active">About</Link>
    <Link to="/contact" activeClassName="active">Contact</Link>
</div>
    );
  }


module.exports = Nav;
