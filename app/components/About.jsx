var React = require('react');
var Rant = require('Rant');
var Services = require('Services');

var About = (props) => {
  return(
    <div>
      <div className="row small-12 small-centered columns text-center" >
          <h1 id="headline">Pylon: true utility to the end user.</h1>
      </div>

        <Rant id="rant" className="row column center"/>

      <div id="services-blocks" className="row small-up-1 medium-up-3 large-up-3">
        <div id="our-services" className="column column-block">
          <h3>Our Services</h3>
        </div>
        <div className="column column-block">
          <div className="panel">
            <h3>User Experience Design</h3>
            <h3>Design Sprints</h3>
            <h3>Design Strategy</h3>
            <h3>Information Architecture</h3>
          </div>
        </div>
        <div className="column column-block">
          <div className="panel">
            <h3>Product Design</h3>
            <h3>Interaction Design</h3>
            <h3>Web Development</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="border-strip" className="small-10 small-centered medium-10 large-10 columns"/>
      </div>




        <div className="row">
          <div id="foundedBlade" className="small-6 small-centered columns">
            <p className="text-center">Founded in 2015 By <a href ="http://www.tylerschmidt.com" target="_blank">Tyler Schmidt</a> & <a href ="http://www.jackzampolin.com" target="_blank">Jack Zampolin</a></p>
          </div>
        </div>

    </div>
      )
    };

module.exports = About;
