<template>
    <input class="input" :type="params.type" :name="params.name"
           :placeholder="params.placeholder"/>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    params: Object,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
