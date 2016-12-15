var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
   <div className="top-bar" id="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <IndexLink to="/" activeClassName="active" id="pylon-text">PYLON</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/about" activeClassName="active" id="menu-text">About</Link>
            </li>
            <li>
            <Link to="/contact" activeClassName="active" id="menu-text">Contact</Link>
          </li>
        </ul>
      </div>
    </div>


  </div>
    );
  }


module.exports = Nav;

/*  <nav className="top-bar" id="top-bar" data-topbar role="navigation">
    <ul className="menu-items">
      <li id="pylon-text">
        <h1><a href="#">PYLON</a></h1>
      </li>
      <li className="toggle-topbar menu-icon"><a href="#"><span>PYLON</span></a></li>
    </ul>

    <section className="top-bar-section">

    //right nav section
      <ul className="right">
        <li className="active">
          <Link to="/about" activeClassName="active" id="menu-text">About</Link>
        </li>
        <li className="active">
          <Link to="/contact" activeClassName="active" id="menu-text">Contact</Link>
        </li>
      </ul>

      //left nav section
      <ul className="left">
      </ul>
    </section>
  </nav>*/
