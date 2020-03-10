<template>
  <div class="col-lg-4">
    <div class="card" style="box-shadow: 5px 5px 40px 0px rgba(0,0,0,0.75);
     padding: 15px; margin-bottom: 10px;">
      <img class="card-img-top" :src="require('../assets/'+leVelo.image)" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{leVelo.nomVelo}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fa fa-bicycle" aria-hidden="true"></i>
          {{leVelo.marque.nom}}</li>
        <li class="list-group-item">{{leVelo.prix}}€</li>
      </ul>
      <div class="card-body">
        <router-link class="btn btn-primary" :to="'/velos/'+leVelo._id">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Velo',
  props: {
    leVelo: Object,
  },
};
</script>

<style scoped>

</style>
