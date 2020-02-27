<template>
  <div id="app">
    <notifications group="veloloc" />
    <router-view/>
  </div>
</template>

<style lang="scss">


  /*//////////////////////////////////////////////////////////////////
  [ FONT ]*/

  html, body{
    background: url("./bg.svg");
    background-size: cover;
    background-position-x: 20vw;
    background-position-y: -10vh;
    background-repeat: no-repeat
  }

  .darkmode--activated h1, .darkmode--activated li {
    color: #ffffff !important;
  }

  .darkmode--activated span{
    color: #dedede !important;
  }

  .darkmode--activated .input{
    background-color: #000000 !important;
  }

  .darkmode-toggle{
    z-index: 100000;
  }

  .jumbotron{
    background-color: #f6f8fa;
  }


  p {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  a {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }


  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
  }


  ul, li {
    margin: 0px;
    list-style-type: none;
  }

  input {
    outline: none;
    border: none;
  }

  /*---------------------------------------------*/

  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; }
  input:focus::-moz-placeholder { color:transparent; }
  input:focus:-ms-input-placeholder { color:transparent; }

  textarea:focus::-webkit-input-placeholder { color:transparent; }
  textarea:focus:-moz-placeholder { color:transparent; }
  textarea:focus::-moz-placeholder { color:transparent; }
  textarea:focus:-ms-input-placeholder { color:transparent; }

  /*---------------------------------------------*/

  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  /*---------------------------------------------*/

  .modify-form-title {
    display: block;
    width: 100%;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 59px;
  }

  .container-modify {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .wrap-modify {
    width: 520px;
    min-height: 100vh;
    border-radius: 2px;
    position: relative;
    padding: 40px;
    text-align: left;
    width: 1200px;
  }

  /*---------------------------------------------*/

  .input {
    display: block;
    width: 100%;
    height: 50px;
    background: white;
    font-family: Poppins-Regular;
    font-size: 22px;
    color: #555555;
    line-height: 1.2;
    padding: 0 2px;

  }

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    background: #0031ff;
    background: -webkit-linear-gradient(45deg, #0031ff, #525252);
    background: -o-linear-gradient(45deg, #0031ff, #525252);
    background: -moz-linear-gradient(45deg, #0031ff, #525252);
    background: linear-gradient(45deg, #0031ff, #525252);
  }

  .input:focus + .focus-input::before {
    width: 100%;
  }

  .has-val.input + .focus-input::before {
    width: 100%;
  }

  .input:focus {
    width: 100%;
  }


  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #dbdbdb;
    margin-bottom: 45px;
  }


  .label-input {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    color: #6b6b6b;
    line-height: 1.2;
    padding-left: 2px;
  }

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

  /*//////////////////////////////////////////////////////////////////
[ Responsive ]*/

  @media (max-width: 576px) {
    .wrap-modify {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

</style>
