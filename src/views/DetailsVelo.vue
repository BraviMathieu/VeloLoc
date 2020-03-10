<template>
  <div>
    <NavComponent></NavComponent>
    <div class="container">
      <h2>{{velos.nomVelo}}</h2>
      <p>{{velos.marque.nom}}</p>
      <img :src="require('../assets/'+velos.image)" width="225" height="225"/>

      <p>{{velos.prix}}€</p>
      <router-link tag="button"  :to="'/payer/'+velos._id"
                   class="btn btn-primary">Louer</router-link>
    </div>
  </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';

export default {
  name: 'detailsVelo',
  components: { NavComponent },
  created() {
    fetch(`http://localhost:3000/velo/${this.$route.params.idVelos}`)
      .then(res => res.json())
      .then((lesVelos) => { this.velos = lesVelos.velo; this.loading = false; });
    fetch('http://localhost:3000/marque')
      .then(res => res.json())
      .then((lesMarques) => { this.marques = lesMarques.marques; });
    console.log(this.$route.params.idVelos);
    console.log(this.velos);
  },
  data: function data() {
    return {
      velos: {},
    };
  },
  methods: {
  },

};

</script>

<style scoped>

</style>
