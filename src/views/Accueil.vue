<template>
  <div>
    <Nav></Nav>
    <h1>Accueil</h1>
    <p>Bonjour {{nom}}</p>
    <button type="button" class="btn btn-danger" @click="logout()">Se déconnecter</button>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'Accueil',
  components: { Nav },
  data: function data() {
    return {
      nom: '',
    };
  },
};
</script>
<style scoped>

</style>
