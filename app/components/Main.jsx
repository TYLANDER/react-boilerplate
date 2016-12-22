var React = require('react');
var Nav = require('Nav');
var Pylon = require('Pylon');

var Main = (props) => {
  return (
    <div>
      <div>
        <Nav/>
          {props.children}
      </div>
      <div className="row">
        <div className="column">
          <div id="hline">
            <p id="footer">©Pylon, LLC 2016. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
