var React = require('react');
var Rant = require('Rant');
//var PylonHeader = require('PylonHeader');
var Logo = require('Logo');

var Pylon = (props) => {
  return(
    <div>
      <div className="columns medium large-11 small-centered">
        <Logo/>
      </div>
      <div>
        <p id="definition">One structural unit of intrinsic value.</p>
      </div>
    </div>
    )
  };

module.exports = Pylon;
