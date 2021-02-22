

    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'silver',
          layout: 'vertical',
          label: 'paypal',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"Esotericon 2021 (Virtual) Early Bird Ticket (Donation)","amount":{"currency_code":"USD","value":53}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();

	export default PayPalButton;