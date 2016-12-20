var React = require('react');

var Services = (props) => {
  return(
    <div id="big-box">
      <div className="row">
        <div className="columns small-2"></div>
        <h2 classname="columns small-4 end">Our Services</h2>
      </div>
      <div className="row align-center">
        <ul class="small-block-grid-4">
          <li id="service-list">
            <ul>
              <li>User Experience Design</li>
              <li>Design Strategy</li>
              <li>Information Architecture</li>
            </ul>
          </li>
          <li id="service-list">
            <ul>
              <li>Product Design</li>
              <li>Interaction Design</li>
              <li>Web Development</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
      )
    };

module.exports = Services;
