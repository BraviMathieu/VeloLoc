<template>
  <div>
 <Nav></Nav>
    <h2>Velos</h2>
    <div>
    <p>Marque</p>
    <select v-model="selected">
      <option></option>
      <option v-for="marque in marques" :key="marque._id" :data="marque">{{marque.nom}}</option>
    </select>
    <p><span>Sélectionné : {{ selected }}</span></p>
      <div id="nomVelo">
    <p>Nom vélo</p>
    <input v-model="recherche">
    <p>nom du vélo contenant {{recherche}} </p>
      </div>
    </div>

    <p v-if="loading">Chargement en cours...</p>
    <p v-else-if="!velos.length">Il n'y a pas de velos</p>
    <ul v-show="velos.length">
      <Velo v-for="velo in velosFiltres" :le-velo="velo" :key="velo._id" :data="velo" >
      </Velo>

    </ul>
  </div>
</template>

<script>
import Velo from '@/components/Velo.vue';
import Nav from '@/components/Nav.vue';

export default {

  name: 'Velos',
  components: { Nav, Velo },
  computed: {

    velosFiltres: function velosFiltres() {
      if (this.selected !== '') {
        document.getElementById('nomVelo').style.visibility = 'visible';
        if (this.recherche !== '') {
          return this.velos.filter(velo => velo.nomVelo.toLowerCase()
            .startsWith(this.recherche.toLowerCase()))
            .filter(velo => velo.marque.nom.toLowerCase()
              .startsWith(this.selected.toLowerCase()));
        }
        return this.velos.filter(velo => velo.marque.nom.toLowerCase()
          .startsWith(this.selected.toLowerCase()));
      }
      /* return this.velos.filter(velo => velo.nomVelo.toLowerCase()
        .startsWith(this.recherche.toLowerCase())); */
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
