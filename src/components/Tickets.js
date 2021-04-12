import React from 'react';

export default function Tickets() {
  return (
    <section id="tickets" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">Event Only Tickets Now Available!</h2>
              <p className="text-white-50">Event only tickets are now available for a $15.00 donation. 
              Please click the PayPal button below to complete your purchase. We're very excited to have
              you this year, and we look forward to June! Please note, once you have completed 
              purchase, please select "RETURN TO MERCHANT" to be redirected to a Google Form so we 
              can document the appropriate information for your Webinar invitation. If you have 
              purchased more than one ticket, please submit one form PER ticket purchased. If you 
              are having issues accessing the Google Form, you can access it here: 
              <a href="https://forms.gle/itrNSGV3eUYa6DmZ7">Ticket Holder Questionaire</a>
              </p>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="SHDKLTSWCAXSL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
}