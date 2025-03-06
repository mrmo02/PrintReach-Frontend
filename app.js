function selectPlan(plan) {
    alert(`You selected ${plan} plan!`);
  }
  
  paypal.Buttons({
    createOrder: function(data, actions) {
      return fetch("https://printreach.co.uk/api/paypal-payment", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: '2.00' }) // Premium plan £2
      })
      .then(res => res.json())
      .then(data => {
        return data.id;
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment successful! Welcome to Premium.');
      });
    }
  }).render('#paypal-button-container');
  