<template>
  <div class="row">
    <div v-if="erreurBool" class="alert alert-danger" role="alert">
      {{msgError}}
    </div>

    <div class="container-login">
      <div class="login-more"></div>
      <div class="wrap-login">
        <div id="login-form" class="login-form validate-form">
          <h1 class="login-form-title">Se connecter</h1>
          <div class="wrap-input">
            <span class="label-input">E-mail</span>
            <input class="input" type="text" name="email"
                   v-model="inputEmail" placeholder="E-mail...">
            <span class="focus-input"></span>
          </div>
          <div class="wrap-input">
            <span class="label-input">Mot de passe</span>
            <input class="input" type="password" name="mdp"
                   v-model="inputMdp" placeholder="**********">
            <span class="focus-input"></span>
          </div>
          <input id="submit-btn" type="button" class="login-form-btn" @click="login()"
          value="Se connecter">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
              const idUser = responseJson.message;

              this.$router.push({ name: 'accueil', params: { idUser } });
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

  /*---------------------------------------------*/
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

  /*---------------------------------------------*/

  p {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul, li {
    margin: 0px;
    list-style-type: none;
  }


  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; }
  input:focus::-moz-placeholder { color:transparent; }
  input:focus:-ms-input-placeholder { color:transparent; }

  textarea:focus::-webkit-input-placeholder { color:transparent; }
  textarea:focus:-moz-placeholder { color:transparent; }
  textarea:focus::-moz-placeholder { color:transparent; }
  textarea:focus:-ms-input-placeholder { color:transparent; }

  input::-webkit-input-placeholder {color: #cccccc;}
  input:-moz-placeholder {color: #cccccc;}
  input::-moz-placeholder {color: #cccccc;}
  input:-ms-input-placeholder {color: #cccccc;}

  textarea::-webkit-input-placeholder {color: #cccccc;}
  textarea:-moz-placeholder {color: #cccccc;}
  textarea::-moz-placeholder {color: #cccccc;}
  textarea:-ms-input-placeholder {color: #cccccc;}

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }

  /*//////////[ login ]*/

  .container-login {
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

  .wrap-login {
    width: 520px;
    min-height: 100vh;
    background: #fff;
    border-radius: 2px;
    position: relative;
    padding: 40px;
    text-align: left;
  }

  /*------------------------------------------------------------------
  [ Login100 more ]*/
  .login-more {
    background-image: url('../assets/bg-01.png');
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
    background: -webkit-linear-gradient(bottom, #006CFF, #0031ff);
    background: -o-linear-gradient(bottom, #006CFF, #0031ff);
    background: -moz-linear-gradient(bottom, #006CFF, #0031ff);
    background: linear-gradient(bottom, #006CFF, #0031ff);
    opacity: 0.8;
  }

  /*==================================================================
  [ Form ]*/

  .login-form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
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
    line-height: 1.2;
    text-align: center;
    padding-bottom: 59px;
  }


  /*------------------------------------------------------------------
  [ Input ]*/

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #dbdbdb;
    margin-bottom: 45px;
  }

  .label-input {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    color: #999999;
    line-height: 1.2;
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

  /*------------------------------------------------------------------
  [ Button ]*/


  .login-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 244px;
    height: 50px;

    font-family: Poppins-Medium;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    border-radius: 25px;
    background:#006CFF;
  }
  .login-form-btn:hover {
    background: #525252;
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
  }

  /*//////////////////////////////////////////////////////////////////
  [ Responsive ]*/

  @media (max-width: 576px) {
    .wrap-login {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>
