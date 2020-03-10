<template>
  <div>
    <NavComponent></NavComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-7 col-sm-9 col-12">
          <br>
          <h1 class="modify-form-title">Paiement</h1>
          <p>Veuillez renseigner vos coordonées bancaires.</p>
          <form id="payment-form" @load="stripeLaunch()">
            <div id="card-element">
              <!--Elements will create input elements here-->
            </div>
            <br>
            <!--We'll put the error messages in this element-->
            <div id="card-errors" role="alert"></div>
            <div id="card-success" role="alert"></div>
            <div id="redir" role="alert"></div>
            <br>
            <button id="submit" class="btn btn-outline-primary">Payer</button>
            <br>
            <br>
            <button id="panier" class="btn btn-outline-secondary">Retour au panier</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavComponent from '../components/NavComponent.vue';

export default {
  name: 'payer',
  components: { NavComponent },
  data: function data() {
    return {
      inputNom: '',
      inputPrenom: '',
      inputEmail: '',
    };
  },
  mounted() {
    this.stripeLaunch();
    fetch('http://localhost:3000/user/5e6752640c0f6908dc2da0a3', {
      method: 'GET',
      body: JSON.stringify({
        email: this.inputEmail,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.json())
      .then((responseJson) => {
        this.inputNom = responseJson.user.nom;
        this.inputPrenom = responseJson.user.prenom;
        this.inputEmail = responseJson.user.email;
      });
  },
  methods: {
    stripeLaunch() {
      // eslint-disable-next-line max-len
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
      let clientSecret;
      const promise = fetch('http://localhost:3000/secret')
        .then(res => res.text());
      promise.then((data) => {
        clientSecret = data;
      });
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        // eslint-disable-next-line no-undef
        stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              name: `${this.inputPrenom} ${this.inputNom}`,
            },
          },
        })
          .then((result) => {
            if (result.error) {
              const err = result.error.message;
              document.getElementById('card-errors').innerText = err;
              console.log(result.error.message);
              let messageDuration = err.length * 80;
              // eslint-disable-next-line max-len
              if (messageDuration > 8000) { messageDuration = 8000; } else if (messageDuration < 2500) { messageDuration = 2500; }
              console.log(messageDuration);
              this.$notify({
                group: 'veloloc',
                componentName: 'submit',
                title: 'Transaction refusée',
                type: 'error',
                duration: messageDuration,
                text: `${result.error.message}`,
              });
              if (err.includes('Votre carte a été refusée.')
                || err.includes('Votre carte ne dispose pas de fonds suffisants.')) {
                this.$notify({
                  group: 'veloloc',
                  componentName: 'redir',
                  text: `Redirection dans ${(messageDuration / 1000).toFixed(0)} secondes...`,
                  type: 'error',
                  duration: messageDuration,
                });
                document.getElementById('submit').disabled = true;
                document.getElementById('panier').disabled = true;
                setTimeout(() => { this.$router.push({ path: 'paiementrate' }); }, messageDuration);
              }
            } else {
              // The payment has been processed!
              // eslint-disable-next-line no-lonely-if
              if (result.paymentIntent.status === 'succeeded') {
                document.getElementById('submit').disabled = true;
                document.getElementById('panier').disabled = true;
                document.getElementById('card-errors').remove();
                this.$notify({
                  group: 'veloloc',
                  componentName: 'submit',
                  title: 'Paiement réussi!',
                  type: 'success',
                  duration: 1500,
                  text: 'Redirection...',
                });
                setTimeout(() => { this.$router.push({ path: 'paiementreussi' }); }, 2000);
              }
            }
          });
      });
    },
  },
};
</script>

<style scoped>

</style>
