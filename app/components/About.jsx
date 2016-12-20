var React = require('react');
var Rant = require('Rant');
var Services = require('Services');

var About = (props) => {
  return(
    <div>
      <div className="row">
          <h1 className="small-12 small-centered columns text-center">Pylon: true utility to the end user.</h1>
      </div>
      <Rant className="row column center"/>
      <div id="banner">
        <div className="row columns small-6 small-centered columns text-center">
          <h2>Our Services</h2>
        </div>

        <div className="row text-center">
          <div className="services-list">
            <h3>User Experience Design</h3>
            <h3>Design Strategy</h3>
            <h3>Information Architecture</h3>
          </div>
          <div className="services-list float-right">
            <h3>Product Design</h3>
            <h3>Interaction Design</h3>
            <h3>Web Development</h3>
          </div>
        </div>
      </div>



        <div id="banner">
          <p>Founded in 2015 By <a href ="http://www.tylerschmidt.com">Tyler Schmidt</a></p>
        </div>

    </div>
      )
    };

module.exports = About;
