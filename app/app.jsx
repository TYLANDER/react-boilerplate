var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute} = require('react-router');
var {browserHistory} = require('react-router');
var Main = require('Main');
var Pylon = require('Pylon');
var About = require('About');
var Contact = require('Contact');
var Logo = require('Logo');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Pylon}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
  </Route>
</Router>,
  document.getElementById('app')
);
