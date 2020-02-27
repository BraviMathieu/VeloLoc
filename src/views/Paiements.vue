<template>
  <div>
    <h2>Paiements</h2>
    <p v-if="loading" style="text-align: center;">Chargement des paiements en cours...</p>
    <p v-else-if="!paiements" style="text-align: center;">Il n'y a pas de paiements</p>
    <div v-show="paiements.length">
      <Paiement v-for="paiement in paiements" :key="paiement.id" :data="paiement"></Paiement>
    </div>
    <div ref="card"></div>
  </div>
</template>

<script>
import Paiement from '../components/Paiement.vue';

export default {
  name: 'Paiements',
  data: function data() {
    return {
      paiements: [],
      loading: true,
    };
  },
  created() {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then((paiements) => {
        this.paiements = paiements.paiements;
        this.loading = false;
      });
  },
  components: { Paiement },
};
</script>
<style scoped>

</style>
