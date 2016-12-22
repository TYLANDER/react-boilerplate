var React = require('react');

var Contact = (props) => {
  return (

      <div className="wrapper">
        <div className='row align-center'>
          <h1 id="new-biz-text">New Business Inquiries</h1>
        </div>

        <div className='row align-center'>
          <a id="contactlink" href="mailto:tyler@pylon.design">Tyler Schmidt</a>
        </div>
    </div>

  );
}

module.exports = Contact;
