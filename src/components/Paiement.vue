<template>
  <div>
    <p>{{ data.receipt_email }}: {{ data.amount }}{{ data.currency }}</p>
    <p>a</p>
  </div>
</template>

<script>
export default {
  name: 'Paiement',
  props: {
    data: Object,
  },
};
</script>

<style scoped>

</style>
