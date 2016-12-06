var React = require('react');
var PylonHeader = require('PylonHeader');
var Rant = require('Rant');

var Pylon = (props) => {
  return(
      <div>
        <h3>Pylon Component</h3>
        <PylonHeader/>
        <Rant/>
      </div>
)
};

module.exports = Pylon;
