<template>
  <div>
    <NavComponent></NavComponent>
    <div class="container">
      <h1>Accueil</h1>
      <InputComponent :params="{type:'text',name:'test',placeholder:'Test...'}"></InputComponent>
      <p>Bonjour {{nom}}</p>
      <button type="button" class="btn btn-danger" @click="logout()">Se déconnecter</button>
    </div>
  </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';
import InputComponent from '../components/InputComponent.vue';

export default {
  name: 'Accueil',
  components: { NavComponent, InputComponent },
  data: function data() {
    return {
      nom: '',
    };
  },
};
</script>
<style scoped>

</style>
