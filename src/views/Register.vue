<template>
  <div>
    <NavComponent></NavComponent>
    <div class="container">
      <br>
      <div class="container-modify">
        <div class="register-more"></div>
        <div class="wrap-modify">
          <div id="register-form" class="modify-form validate-form">
            <h1 class="modify-form-title">Créer un compte</h1>
              <div class="wrap-input">
                <span class="label-input">Nom</span>
                <InputComponent :params="{type:'text',name:'nom',placeholder:'Nom...'}"
                                v-model="inputNom"></InputComponent>
                <SpanInputAfterComponent></SpanInputAfterComponent>
              </div>
              <div class="wrap-input">
                <span class="label-input">Prénom</span>
                <InputComponent :params="{type:'text',name:'prenom',placeholder:'Prénom...'}"
                                v-model="inputPrenom"></InputComponent>
                <SpanInputAfterComponent></SpanInputAfterComponent>
              </div>
              <div class="wrap-input">
                <span class="label-input">E-mail</span>
                <InputComponent :params="{type:'email',name:'email',placeholder:'E-mail...'}"
                                v-model="inputEmail"></InputComponent>
                <SpanInputAfterComponent></SpanInputAfterComponent>
              </div>
              <div class="wrap-input">
                <span class="label-input">Mot de passe</span>
                <InputComponent :params="{type:'password',name:'mdp',
                placeholder:'Mot de passe...'}" v-model="inputMdp"></InputComponent>
                <SpanInputAfterComponent></SpanInputAfterComponent>
              </div>
              <div class="wrap-input">
                <span class="label-input">Confirmation</span>
                <InputComponent :params="{type:'password',name:'mdp-confirmation',
                placeholder:'Mot de passe...'}" v-model="inputMdpConfirmation"></InputComponent>
                <SpanInputAfterComponent></SpanInputAfterComponent>
              </div>
          </div>
          <div class="text-center">
            <button id="submit-btn" type="button" class="register-form-btn"
                   @click="register()">Créer un compte</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';
import InputComponent from '../components/InputComponent.vue';
import SpanInputAfterComponent from '../components/SpanInputAfter.vue';


export default {
  name: 'Register',
  components: { NavComponent, InputComponent, SpanInputAfterComponent },
  data: function data() {
    return {
      inputNom: '',
      inputPrenom: '',
      inputEmail: '',
      inputMdp: '',
      inputMdpConfirmation: '',
    };
  },
  methods: {
    /**
     * Verification des informations et appel de l'API pour créer un compte
     */
    register() {
      // Si l'email et le mot de passe ne sont pas vides
      if (this.inputEmail !== '' && this.inputMdp !== '' && this.inputNom !== '' && this.inputPrenom !== '') {
        if (this.inputMdp === this.inputMdpConfirmation) {
          fetch('http://localhost:3000/user/', {
            method: 'POST',
            body: JSON.stringify({
              nom: this.inputNom,
              prenom: this.inputPrenom,
              email: this.inputEmail,
              mdp: this.inputMdp,
            }),
            headers: {
              'Content-type': 'application/json',
            },
          }).then(response => response.json())
            .then(() => {
              this.inputNom = '';
              this.inputPrenom = '';
              this.inputEmail = '';
              this.inputMdp = '';
              this.inputMdpConfirmation = '';

              this.$notify({
                group: 'veloloc',
                title: 'Informations envoyées',
                text: 'L\'utilisateur a été ajouté.',
                position: 'top center',
              });
            });
        } else {
          this.$notify({
            group: 'veloloc',
            type: 'error',
            title: 'Erreur',
            text: 'Les mots de passe sont différents.',
            position: 'top center',
          });
        }
      } else {
        this.$notify({
          group: 'veloloc',
          type: 'error',
          title: 'Erreur',
          text: 'Veuillez entrer toutes les informations.',
          position: 'top center',
        });
      }
    },
  },
};
</script>

<style scoped>


  /*//////////[ register ]*/

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
  }

  /*------------------------------------------------------------------
  [ Login100 more ]*/
  .register-more {
    background-image: url('../assets/bg-02.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: calc(100% - 520px);
    position: relative;
    z-index: 1;
  }

  .register-more::before {
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

  .modify-form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /*------------------------------------------------------------------
  [ Button ]*/

  .register-form-btn {
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
  .register-form-btn:hover {
    background: #525252;
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
  }

</style>
