var React = require('react');

var Contact = (props) => {
  return (
    <div>
    <div className='row align-center'>
      <h2>New Business Inquiries</h2>
    </div>
    <div className='row align-center'>
      <p>Contact:</p>
    </div>
    <div className='row align-center'>
      <a href="mailto:tyler@pylon.design">Tyler Schmidt</a>
    </div>
  </div>
  );
}

module.exports = Contact;
