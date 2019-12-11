<template>
  <div>
  <h3>{{data.marque.nom}}</h3>
    <p>{{data.nomVelo}}</p>
    <p>{{data.prix}}</p>
    <router-link to="/velos/data._prix">Details</router-link>
 </div>
</template>

<script>
export default {
  name: 'marque',
  props: {
    data: Object,
  },
};
</script>

<style scoped>

</style>
