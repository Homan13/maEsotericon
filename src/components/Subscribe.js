import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class Subscribe extends React.Component {
  // 1. via `.then`
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(inputEmail)
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }
  
  render () {
    return (
      <section id="signup" className="signup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

              <form className="form-inline d-flex">
                <input
                  type="email"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  placeholder="Enter email address..."
                />
                <button type="submit" className="btn btn-primary mx-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

