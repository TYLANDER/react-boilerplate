var React = require('react');
var Nav = require('Nav');
var Pylon = require('Pylon');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-10-centered large-12 small-centered">
            {props.children}
            <div class="row">
              <div class="large-1 columns"></div>
              <div class="large-11 columns">
                <footer id="footer">
                  <p>Copyright 2016 Pylon, LLC. All rights reserved.</p>
                </footer>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
