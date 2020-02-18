<template>
  <div id="app">
    <div class="nav" id="nav10">
      <ul>
        <li><a href="/"><i class="fas fa-home"></i></a></li>
        <li><a href="#"><i class="fas fa-wrench"></i>
          <span>Services
          <i class="fa fa-chevron-down"></i>
        </span></a>
          <ul  class="sublevel menu">
            <li><a href="#">Link #1 - Level 1</a></li>
            <li><a href="#">Link #2 - Level 1 <i class="fa fa-chevron-right"></i></a>
              <ul  class="sublevel menu">
                <li><a href="#">Link #1 - Level 1</a></li>
                <li><a href="#">Link #2 - Level 1</a></li>
                <li><a href="#">Link #3 - Level 1</a></li>
                <li><a href="#">Link #4 - Level 1</a></li>
              </ul>
            </li>
            <li><a href="#">Link #3 - Level 1</a></li>
            <li><a href="#">Link #4 - Level 1</a></li>
            <li><a href="#">Link #5 - Level 1 <i class="fa fa-chevron-right"></i></a>
              <ul  class="sublevel menu">
                <li><a href="#">Link #1 - Level 2</a></li>
                <li><a href="#">Link #2 - Level 2<i class="fa fa-chevron-right"></i></a>
                  <ul  class="sublevel menu">
                    <li><a href="#">Link #1 - Level 3</a></li>
                    <li><a href="#">Link #2 - Level 3</a></li>
                    <li><a href="#">Link #3 - Level 3</a></li>
                    <li><a href="#">Link #4 - Level 3</a></li>
                  </ul>
                </li>
                <li><a href="#">Link #3 - Level 2</a></li>
                <li><a href="#">Link #4 - Level 2</a></li>
              </ul>
            </li>
            <li><a href="#">Link #6 - Level 1</a></li>
          </ul>
        </li>
        <li><a href="/velos"><i class="fas fa-bicycle "></i><span>Nos vélos</span></a></li>
        <li><a href="/posts"><i class="fas fa-envelope"></i><span>Post</span></a></li>
        <li><a href="/paiement"><i class="fas fa-shopping-basket"></i><span>Paiement</span></a></li>
        <li><a href="/payer"><i class="fas fa-credit-card"></i><span>Payer</span></a></li>
        <li><a href=""><i class="fas fa-user"></i><span>Mon compte
          <i class="fa fa-chevron-down"></i></span></a>
          <ul  class="sublevel menu">
            <li><a href="/register">Créer un compte</a></li>
            <li><a href="/login">Se connecter</a></li>
          </ul>
        </li>
      </ul>
    </div>
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
