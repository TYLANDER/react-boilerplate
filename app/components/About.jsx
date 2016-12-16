var React = require('react');
var Rant = require('Rant');

var About = (props) => {
  return(
    <div>
      <div classname="row align-center">
        <h3 id="headline">Pylon: true utility to the end user.</h3>
      </div>
      <div  className="row align-center">
        <div id="services" className="column small-10 medium-4">
          <h2>Services</h2>
          <ul>
            <li>User Experience Design</li>
            <li>Design Strategy</li>
            <li>Product Design</li>
          </ul>
        </div>
        <div id="services" className="column small-10 medium-4">
            <ul>
              <li>Web Development</li>
              <li>Information Architecture</li>
              <li>Interaction Design</li>
            </ul>
        </div>
        <Rant/>
            <p>Founded in 2015 By <a href ="http://www.tylerschmidt.com">Tyler Schmidt</a></p>
      </div>
    </div>
      )
    };

module.exports = About;
