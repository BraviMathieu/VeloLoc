<template>

  <div>
    <Nav></Nav>
    <br>
    <div class="container-modify">
      <div class="wrap-modify">
        <div id="modify-form" class="modify-form validate-form">
          <h1 class="modify-form-title">Modifier mes informations</h1>
          <div class="wrap-image text-center">
            <span class="label-input">Avatar</span>
            <br>
            <img :src="`data:image/png;base64,${inputImgBase64}`"
                 class="darkmode-ignore img-thumbnail rounded-circle"/>
            <input class="input text-center" type="file" name="avatar" accept="image/*"
                   @change="selectedImage">

          </div>
            <input id="imagebase64" class="input" type="text" name="avatar" hidden>
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
          <input id="submit-btn" type="button" class="modify-form-btn" @click="modify()"
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
      inputImgBase64: '',
    };
  },
  mounted() {
    fetch('http://localhost:3000/user/5dcab2785bde9d1b7438bba3', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.json())
      .then((responseJson) => {
        this.inputNom = responseJson.user.nom;
        this.inputPrenom = responseJson.user.prenom;
        this.inputEmail = responseJson.user.email;
        this.inputImgBase64 = responseJson.user.image;
      });
  },
  methods: {
    modify() {
      // Si les informations ne sont pas vides
      if (this.inputEmail !== '' && this.inputNom !== '' && this.inputPrenom !== '') {
        const datab64 = document.getElementById('imagebase64').value;
        console.log(datab64);
        fetch('http://localhost:3000/user/5dcab2785bde9d1b7438bba3', {
          method: 'PUT',
          body: JSON.stringify({
            nom: this.inputNom,
            prenom: this.inputPrenom,
            email: this.inputEmail,
            image: datab64,
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
            if (datab64 !== '') {
              this.inputImgBase64 = datab64;
            }
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
    selectedImage(event) {
      const monImage = event.target.files[0];
      const reader = new FileReader();
      reader.readAsBinaryString(monImage);

      reader.onload = (function (e) {
        const binaryData = e.target.result;
        const base64String = window.btoa(binaryData);
        // Obligé d'utiliser un input en hidden, pas possible d'utiliser les v-model
        document.getElementById('imagebase64').value = base64String;
      });
    },
  },
};
</script>

<style scoped>

  .img-thumbnail{
    width: 300px;
    height: 300px;
  }

  /*//////////[ modify ]*/

  /*------------------------------------------------------------------
  [ Input ]*/

  .wrap-image{
    width: 100%;
    position: relative;
  }

  /*------------------------------------------------------------------
  [ Button ]*/

  .modify-form-btn {
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
  .modify-form-btn:hover {
    background: #525252;
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
  }

</style>
