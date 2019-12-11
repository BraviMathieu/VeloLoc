<template>
  <div>
    <h1>Accueil</h1>
    <p>Bonjour {{nom}}</p>
    <button type="button" class="btn btn-danger">Se déconnecter</button>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data: function data() {
    return {
      nom: '',
    };
  },
};
</script>

<style scoped>

</style>
