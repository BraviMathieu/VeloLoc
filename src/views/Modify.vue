<template>

  <div>
    <NavComponent></NavComponent>
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
          <div class="text-center">
            <button id="submit-btn" class="modify-form-btn" @click="modify()">Modifier</button>
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
  name: 'Modify',
  components: { NavComponent, InputComponent, SpanInputAfterComponent },
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
