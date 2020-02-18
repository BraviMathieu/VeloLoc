<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="container">
        <form id="payment-form">
          <div id="card-element">
            <!--Elements will create input elements here-->
          </div>

          <!--We'll put the error messages in this element-->
          <div id="card-errors" role="alert"></div>
          <div id="card-success" role="alert"></div>
          <button id="submit">Pay</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
function stripeLaunch() {
  // Set your publishable key: remember to change this to your live publishable key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  // eslint-disable-next-line no-undef
  const stripe = Stripe('pk_test_RaklY8fqgQueX56HMWvoKKmI00XAWwZhah');
  const elements = stripe.elements();
  // Set up Stripe.js and Elements to use in checkout form
  const style = {
    base: {
      color: '#32325d',
    },
  };

  const card = elements.create('card', { style });
  card.mount('#card-element');

  card.addEventListener('change', ({ error }) => {
    const displayError = document.getElementById('card-errors');
    if (error) {
      displayError.textContent = error.message;
    } else {
      displayError.textContent = '';
    }
  });

  const form = document.getElementById('payment-form');
  const clientSecret = 'pi_1GDYsKA8vJqX70O5fsKKlK8S_secret_nq6LUxZ2Asda9CIGAMb05lK4h'; // a changer depuis le serveur pour le moment a chaque requête
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // eslint-disable-next-line no-undef
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    }).then((result) => {
      if (result.error) {
        document.getElementById('card-errors').innerText = 'Il y\'a eu un souci avec votre paiement. Veuillez réessayer plus tard ou modifiez vos coordonnées.';
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        // eslint-disable-next-line no-lonely-if
        if (result.paymentIntent.status === 'succeeded') {
          document.getElementById('submit').disabled = true;
          document.getElementById('card-errors').remove();
          document.getElementById('card-success').innerText = 'Paiement réussi!';
        }
      }
    });
  });
}

setTimeout(() => { stripeLaunch(); }, 0);

export default {
  name: 'payer',
};
</script>

<style scoped>

</style>
