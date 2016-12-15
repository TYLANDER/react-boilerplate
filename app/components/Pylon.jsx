var React = require('react');
var Rant = require('Rant');
//var PylonHeader = require('PylonHeader');
var Logo = require('Logo');

var Pylon = (props) => {
  return(
    <div className="row align-center">
      <div className="small-8">
        <Logo/>
        <p id="definition">One structural unit of intrinsic value.</p>
      </div>
    </div>
    )
  };

module.exports = Pylon;
