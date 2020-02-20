<template>
  <div id="app">
    <notifications group="veloloc" />
    <router-view/>
  </div>
</template>

<style lang="scss">

  /*//////////////////////////////////////////////////////////////////
  [ FONT ]*/

  @font-face {
    font-family: Poppins-Regular;
    src: url('../public/fonts/poppins/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: Poppins-Medium;
    src: url('../public/fonts/poppins/Poppins-Medium.ttf');
  }

  @font-face {
    font-family: Poppins-Bold;
    src: url('../public/fonts/poppins/Poppins-Bold.ttf');
  }

  @font-face {
    font-family: Poppins-SemiBold;
    src: url('../public/fonts/poppins/Poppins-SemiBold.ttf');
  }

  /*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    font-family: Poppins-Regular, sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0px;
  }

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
