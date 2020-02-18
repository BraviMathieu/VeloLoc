<template>
  <form id="payment-form">
    <div id="card-element">
      <!--Elements will create input elements here-->
    </div>

    <!--We'll put the error messages in this element-->
    <div id="card-errors" role="alert"></div>

    <button id="submit">Pay</button>
  </form>
</template>

<script>
export default {
  name: 'payer',
};

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

// eslint-disable-next-line no-unused-vars
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  const form = document.getElementById('payment-form');
  const hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}
</script>

<style scoped>

</style>
