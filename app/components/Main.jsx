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
      <div className="row align-center">
        <div className="column small-1"></div>
        <div className="column">
          <div id="hline">
            <p id="footer">Copyright 2016 Pylon, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
