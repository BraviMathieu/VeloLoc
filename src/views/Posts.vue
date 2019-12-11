<template>
  <div>
    <h1>Post</h1>
    <p v-if="loading">Chargement en cours...</p>
    <p v-else-if="!posts.length">Il n'y a pas de posts.</p>
    <ul v-show="posts.length">
      <Post v-for="post in posts" :key="post._id" :data="post"></Post>
    </ul>
  </div>
</template>

<script>
import Post from '../components/Post.vue';

export default {
  name: 'Posts',
  data: function data() {
    return {
      posts: Array,
      loading: true,
    };
  },
  created() {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then((posts) => {
        this.posts = posts.users;
        this.loading = false;
      });
  },
  components: { Post },
};
</script>

<style scoped>

</style>
