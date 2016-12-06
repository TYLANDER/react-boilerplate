var React = require('react');

var Contact = (props) => {
  return (
    <div>
      <h1 className="text-center">Contact</h1>
      <ul className="text-center">
        <li>
          <p>3440 20th st. #105</p>
          <p>San Francisco, CA 94110</p>
        </li>
        <li>
          <p>Phone:</p>
          <p>451-812-1805</p>
        </li>
      </ul>
    </div>
  );
}

module.exports = Contact;
