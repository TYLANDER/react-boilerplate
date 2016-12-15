var React = require('react');

var Contact = (props) => {
  return (
    <div className='contact-email'>
      <h2>New Business Inquiries</h2>
      <p>Contact:</p>
      <a href="mailto:tyler@pylon.design">Tyler Schmidt</a>
    </div>
  );
}

module.exports = Contact;
