<template>
  <div >
    <div ref="card"></div>
    <button @click="purchase()">Purchase</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
const elements = stripe.elements();
let card;
const style = {
  base: {
    border: '1px solid #D8D8D8',
    borderRadius: '4px',
    color: '#000',
  },
  invalid: {
    // All of the error styles go inside of here.
  },
};

export default {
  mounted: function mounted() {
    card = elements.create('card', style);
    card.mount(this.$refs.card);
  },
  methods: {
    purchase() {
      const self = this;
      stripe.createToken(card).then((result) => {
        if (result.error) {
          self.hasCardErrors = true;
          return self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
        }
        return null;
      });
    },
  },
};
</script>

<style scoped>

</style>
