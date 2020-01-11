import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

            <form className="form-inline d-flex" action="https://getform.io/f/fecd8215-e444-400f-b889-c86b2b036683" method="POST">
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                name="email"
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
