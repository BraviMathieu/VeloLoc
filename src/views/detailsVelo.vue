<template>
<div>
  <p>woulah ça marche</p>
</div>
</template>

<script>
export default {
  name: 'detailsVelo',
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
