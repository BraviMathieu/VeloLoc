<template>
  <div class="jumbotron">
    <p>{{leVelo.marque.nom}}<p/>
    <p>{{leVelo.nomVelo}}</p>
    <p>{{leVelo.prix}}€</p>
    <router-link :to="'/velos/'+leVelo._id">Details</router-link>
 </div>
</template>

<script>
export default {
  name: 'Velo',
  props: {
    leVelo: Object,
  },
};
</script>

<style scoped>

</style>
