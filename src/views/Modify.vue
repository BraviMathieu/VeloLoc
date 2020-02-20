<template>

  <div>
    <Nav></Nav>
    <br>
    <div class="container-modify">
      <div class="wrap-modify">
        <div id="modify-form" class="modify-form validate-form">
          <h1 class="modify-form-title">Modifier mes informations</h1>
          <div class="wrap-image">
            <span class="label-input">Avatar</span>
            <br>
            <img src="https://photos-a-la-con.fr/wp-content/uploads/2020/01/5da6cd98210000140f34a123-1000x500.jpeg" class="img-thumbnail">
          </div>
          <div class="wrap-input">
            <br><br>
            <span class="label-input">Nom</span>
            <input class="input" type="text" name="nom"
                   v-model="inputNom" placeholder="Nom...">
            <span class="focus-input"></span>
          </div>
          <div class="wrap-input">
            <span class="label-input">Prénom</span>
            <input class="input" type="text" name="prenom"
                   v-model="inputPrenom" placeholder="Prénom...">
            <span class="focus-input"></span>
          </div>
          <div class="wrap-input">
            <span class="label-input">E-mail</span>
            <input class="input" type="email" name="email"
                   v-model="inputEmail" placeholder="E-mail...">
            <span class="focus-input"></span>
          </div>
          <input id="submit-btn" type="button" class="register-form-btn" @click="modify()"
                 value="Modifier">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'Modify',
  components: { Nav },
  data: function data() {
    return {
      inputNom: '',
      inputPrenom: '',
      inputEmail: '',
    };
  },
  mounted() {
    fetch('http://localhost:3000/user/5e4bf465799eac09e09d0eca', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson.user);
        this.inputNom = responseJson.user.nom;
        this.inputPrenom = responseJson.user.prenom;
        this.inputEmail = responseJson.user.email;
      });
  },
  methods: {
    modify() {
      // Si les informations ne sont pas vides
      if (this.inputEmail !== '' && this.inputNom !== '' && this.inputPrenom !== '') {
        fetch('http://localhost:3000/user/5e4bf465799eac09e09d0eca', {
          method: 'PUT',
          body: JSON.stringify({
            nom: this.inputNom,
            prenom: this.inputPrenom,
            email: this.inputEmail,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }).then(response => response.json())
          .then(() => {
            this.$notify({
              group: 'veloloc',
              title: 'Informations envoyées',
              text: 'Vos informations ont été enregistrées',
              position: 'top center',
            });
          });
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


  .img-thumbnail{
    max-width: 500px;
  }

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
    margin: 0 auto !important;
    width: 520px;
    min-height: 100vh;
    background: #fff;
    border-radius: 2px;
    position: relative;
    padding: 40px;
    text-align: left;
    width: 1200px;
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


  /*------------------------------------------------------------------
  [ Input ]*/

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #dbdbdb;
    margin-bottom: 45px;
  }

  .wrap-image{
    width: 100%;
    position: relative;
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

  .register-form-btn {
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
  .register-form-btn:hover {
    background: #525252;
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
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
