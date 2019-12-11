<template>
  <div class="row">
    <div class="col-lg-12">
      <div v-if="erreurBool" class="alert alert-danger" role="alert">
        {{msgError}}
      </div>
    </div>
    <div class="container-login">
      <div class="login-more"></div>
      <div class="wrap-login">
        <form id="login-form" class="login-form validate-form">
          <h1 class="login-form-title">Se connecter</h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="wrap-input">
                <span class="label-input">E-mail</span>
                <input class="input" type="text" name="email"
                       v-model="inputEmail" placeholder="E-mail...">
                <span class="focus-input"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="wrap-input">
                <span class="label-input">Mot de passe</span>
                <input class="input" type="password" name="mdp"
                       v-model="inputMdp" placeholder="**********">
                <span class="focus-input"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <input id="submit-btn" type="button" class="login-form-btn" @click="login()"
                     value="Se connecter">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login2',
  data: function data() {
    return {
      inputEmail: '',
      inputMdp: '',
      erreurBool: false,
      msgError: '',
    };
  },
  methods: {
    /**
       * Verification des informations et appel de l'API pour se connecter
       */
    login() {
      this.erreurBool = false;
      // Si l'email et le mot de passe ne sont pas vides
      if (this.inputEmail !== '' && this.inputMdp !== '') {
        fetch('http://localhost:3000/login', {
          method: 'POST',
          body: JSON.stringify({
            email: this.inputEmail,
            mdp: this.inputMdp,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }).then(response => response.json())
          .then((responseJson) => {
            if ('message' in responseJson) {
              this.erreurBool = false;
              // redirection vers l'accueil
              this.$router.push('Accueil');
            } else if ('error' in responseJson) {
              this.erreurBool = true;
              this.msgError = 'Email ou mot de passe invalide.';
            }
          });
      } else {
        this.erreurBool = true;
        this.msgError = 'Veuillez entrer un email et un mot de passe.';
      }
    },
  },
};
</script>

<style scoped>
  @font-face {
    font-family: Poppins-Regular;
    src: url('../../public/fonts/poppins/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: Poppins-Medium;
    src: url('../../public/fonts/poppins/Poppins-Medium.ttf');
  }

  @font-face {
    font-family: Poppins-Bold;
    src: url('../../public/fonts/poppins/Poppins-Bold.ttf');
  }

  @font-face {
    font-family: Poppins-SemiBold;
    src: url('../../public/fonts/poppins/Poppins-SemiBold.ttf');
  }

  a {
    font-family: Poppins-Regular;
    font-size: 14px;
    transition: all 0.4s;
  }
  a:hover {
    text-decoration: none;
  }

  p {
    font-family: Poppins-Regular;
    font-size: 14px;
  }

  input {
    border: none;
  }

  button {
    border: none;
    background: transparent;
  }
  button:hover {
    cursor: pointer;
  }


  .container-login {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .wrap-login {
    width: 520px;
    min-height: 100vh;
    background: #fff;
    border-radius: 2px;
    position: relative;
    padding: 40px;
  }

  .login-more {
    background-image: url('../bg-01.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: calc(100% - 520px);
    position: relative;
    z-index: 1;
  }

  .login-more::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #006CFF;
    background: linear-gradient(bottom, #006CFF, #0031ff);
    opacity: 0.8;
  }

  .login-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .login-form-title {
    display: block;
    width: 100%;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    text-align: center;
    padding-bottom: 59px;
  }

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #dbdbdb;
    margin-bottom: 45px;
    text-align: left;
  }

  .label-input {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    color: #0031ff;
    padding-left: 2px;
  }

  .input {
    display: block;
    width: 100%;
    height: 50px;
    background: transparent;
    font-family: Poppins-Regular;
    font-size: 22px;
    color: #555555;
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
    transition: all 0.4s;
    background: #006CFF;
    background: linear-gradient(45deg, #006CFF, #525252);
  }

  .input:focus + .focus-input::before {
    width: 100%;
  }

  .has-val.input + .focus-input::before {
    width: 100%;
  }


  .login-form-btn {

    padding: 0 20px;
    height: 50px;
    font-family: Poppins-Medium;
    font-size: 16px;
    color: #fff;
    border-radius: 25px;
    background:#006CFF;
  }

  .login-form-btn:hover {
    background: #525252;
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
  }

  .wrap-pic-cir img {
    width: 100%;
  }

  .hov-img-zoom img{
    width: 100%;
    transition: all 0.6s;
  }

  .hov-img-zoom:hover img {
    transform: scale(1.1);
  }
</style>
