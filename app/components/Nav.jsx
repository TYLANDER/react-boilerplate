var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <IndexLink to="/" activeClassName="active" className="menu-text">Pylon</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    );
  }


module.exports = Nav;

var old = (
<div>
  <h2>Nav Component</h2>
  <IndexLink to="/" activeClassName="active">Pylon</IndexLink>
  <Link to="/about" activeClassName="active">About</Link>
  <Link to="/contact" activeClassName="active">Contact</Link>
</div>
)
