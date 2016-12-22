var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <nav id="top-bar">
      <div className="row align-justify" >
        <div className="column small-6">
          <ul className="menu align-left">
            <li>
              <IndexLink to="/" activeClassName="active" id="pylon-text">PYLON</IndexLink>
            </li>
          </ul>
        </div>
        <div className="column small-6">
          <ul className="menu align-right" id="menu-right">
              <li>
                <Link to="/about" activeClassName="active" id="menu-text">About</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active" id="menu-text">Contact</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }


module.exports = Nav;
