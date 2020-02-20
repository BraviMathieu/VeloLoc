<template>
<div>
<h2>{{velos.nomVelo}}</h2>
  <p>{{velos.marque.nom}}</p>
  <p>{{velos.image}}</p>
  <img :src="require('../assets/'+velos.image)" width="225" height="225"/>

  <p>{{velos.prix}}€</p>
  <button class="btn btn-default btn-lg">acheter</button>
</div>
</template>

<script>


export default {
  name: 'detailsVelo',
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
