var React = require('react');
var Nav = require('Nav');
var Pylon = require('Pylon');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-10-centered large-11 small-centered">
            {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
