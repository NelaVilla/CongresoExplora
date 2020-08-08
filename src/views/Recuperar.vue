<template>
  <div id="recuperar">
    <b-form @submit.prevent="recuperar" id="fomulario__grupo">
      <h3>Para recuperar su contraseña, escriba su email</h3>
      <!---Recuperar Email--->
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          v-model="form.email"
          required
          placeholder="Ingresa tu email"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" id="fomulario__grupo--boton" >Recuperar</b-button>
    </b-form>

    <div id="fomulario__grupo--link">
<p>Para volver haz click <router-link :to="{name:'Login'}" >aquí</router-link></p>        
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: "recuperar",
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    recuperar() {
      var auth = Firebase.auth();
      var emailAddress = this.form.email;

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          alert('Se ha enviado un email a su correo electrónico')
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#recuperar{
  margin: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}

#fomulario__grupo--boton{
  color:#2410d3;
  background-color: transparent;
  border: 2px #2410d3 solid;
  border-radius: 4px;
  &:focus {
      color: #149af3;
      background-color: transparent;
      border: 2px #149af3 solid;
      border-radius: 15px;
      transition: all 0.3s ease 0s;
    }
    &:hover {
        color: #149af3!important;
        border-radius: 50px;
        border-color: #149af3 !important;
        transition: all 0.3s ease 0s;
        background: transparent;
      }
      &:active {
          color: #149af3;
          background-color: transparent;
          border: 1px #149af3 solid;
          border-radius: 15px;
        }
      
}
#formulario__grupo--link{
  margin-top: 5%;
}
/* Media Queries */

/* Para 600px */
@media only screen and (max-width: 620px) and (min-width: 501px) {
  #fomulario__grupo{
    h3 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-1 {
      font-size: 0.9rem;
    }
    &--boton {
      font-size: 0.9rem;
    }
     &--link >p{
      font-size: 0.9rem;
    }
  }

}

/* Para 480px */
@media only screen and (max-width: 500px) and (min-width: 341px) {
  #fomulario__grupo{
    h3 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-1 {
      font-size: 0.9rem;
    }
    
    
    &--boton {
      font-size: 0.9rem;
    }
    &--link >p{
      font-size: 0.9rem;
    }
  }
} 
</style>
