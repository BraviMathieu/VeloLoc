<template>
  <div>
    <h2>Velos</h2>
    <select v-model="selected">
      <option></option>
      <option v-for="marque in marques" :key="marque._id" :data="marque">{{marque.nom}}</option>
    </select>
    <p><span>Sélectionné : {{ selected }}</span></p>
    <input v-model="recherche">
    <p>nom du velo contenant {{recherche}} </p>
    <div>

      <p>prix du vélo</p> <input type="number" v-model="intervalle1">
  </div>

    <p v-if="loading">Chargement en cours...</p>
    <p v-else-if="!velos.length">Il n'y a pas de velos</p>
    <ul v-show="velos.length">
      <Velo v-for="velo in velosFiltres" :key="velo._id" :data="velo" >
      </Velo>

    </ul>
  </div>
</template>

<script>
import Velo from '@/components/Velo.vue';


export default {

  name: 'Velos',
  components: { Velo },
  computed: {
    velosFiltres: function velosFiltres() {
      if (this.intervalle1 !== '') {
        return this.velos.filter(velo => velo.prix
           === parseFloat(this.intervalle1));
      }
      if (this.recherche !== '') {
        /* if (this.selected !== '') {
          return this.velos.filter(velo => velo.nomVelo.toLowerCase()
            .startsWith(this.recherche.toLowerCase()) && velo => velo.marque.nom.toLowerCase()
            .startsWith(this.selected.toLowerCase());
        } */
        return this.velos.filter(velo => velo.nomVelo.toLowerCase()
          .startsWith(this.recherche.toLowerCase()));
      }
      if (this.selected !== '') {
        return this.velos.filter(velo => velo.marque.nom.toLowerCase()
          .startsWith(this.selected.toLowerCase()));
      }

      return this.velos;
    },
  },
  data: function data() {
    return {
      velos: [],
      filtreVelos: [],
      marques: [],
      loading: true,
      recherche: '',
      selected: '',
      intervalle1: '',
    };
  },
  created() {
    fetch('http://localhost:3000/velo')
      .then(res => res.json())
      .then((lesVelos) => { this.velos = lesVelos.velos; this.loading = false; });
    fetch('http://localhost:3000/marque')
      .then(res => res.json())
      .then((lesMarques) => { this.marques = lesMarques.marques; });
  },

};


</script>

<style scoped>

</style>
