<template>
  <li>
    <h3>{{data._id}}</h3>
    <p>{{data.nom}}</p>
    <p>{{data.email}}</p>
    <p>{{data.pseudo}}</p>
  </li>
</template>

<script>
export default {
  name: 'Post',
  props: {
    data: Object,
  },
};
</script>

<style scoped>

</style>
