<template>
  <div>
    <NavComponent></NavComponent>
      <div class="container">
      <br>
      <h2 class="modify-form-title">Velos</h2>
        <div class="row centrer" >
          <div class="col-lg-4">
            <label for="marques">Marque du vélo</label>
            <select v-model="selected" id = "marques" class="custom-select">
              <option></option>
              <option v-for="marque in marques" :key="marque._id"
                      :data="marque">{{marque.nom}}</option>
            </select>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="velo-recherche">Nom du vélo</label>
              <input type="text" class="form-control"  v-model="recherche" id="velo-recherche">
              <small id="texteRecherche" class="form-text text-muted">
                Nom du vélo contenant : {{recherche}} </small>
            </div>
          </div>
          <div class="col-lg-4">
            <label>Prix du vélo</label>
            <vue-slider
              v-model="valueRecherche"
              :data="dataRecherche"
              :marks="true"
            ></vue-slider>
          </div>
        </div>
        <br> <br>
      <p v-if="loading">Chargement en cours...</p>
      <p v-else-if="velos.length == 0">Il n'y a pas de velos</p>
      <div class="row" v-show="velos.length">
        <Velo v-for="velo in velosFiltres" :le-velo="velo" :key="velo._id" :data="velo"></Velo>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import NavComponent from '../components/NavComponent.vue';
import Velo from '../components/Velo.vue';
import 'vue-slider-component/theme/antd.css';

export default {

  name: 'Velos',
  components: { NavComponent, Velo, VueSlider },
  computed: {

    velosFiltres: function velosFiltres() {
      let veloReturn = this.velos;
      if (this.selected !== '') {
        if (this.recherche !== '') {
          veloReturn = this.velos.filter(velo => velo.nomVelo.toLowerCase()
            .startsWith(this.recherche.toLowerCase()))
            .filter(velo => velo.marque.nom.toLowerCase()
              .startsWith(this.selected.toLowerCase()));
        } else {
          veloReturn = this.velos.filter(velo => velo.marque.nom.toLowerCase()
            .startsWith(this.selected.toLowerCase()));
        }
      } else if (this.recherche !== '') {
        veloReturn = this.velos.filter(velo => velo.nomVelo.toLowerCase()
          .startsWith(this.recherche.toLowerCase()));
      }
      return veloReturn;
    },
  },
  data: function data() {
    return {
      velos: [],
      marques: [],
      loading: true,
      recherche: '',
      selected: '',
      valueRecherche: ['0', '600'],
      dataRecherche: ['0', '100', '200', '300', '400', '500', '600'],
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

  .centrer{
  margin: auto;
}

</style>
