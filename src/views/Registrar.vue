<template>
  <div id="Registrar">
    <div id="form">
      <b-form @submit.prevent="registro">
        <h3>Para registrarse debe ingresar un email y una constraseña</h3>

        <!---Parte Email--->
        <b-form-group
          id="input-group-1"
          label="Ingrese su email:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            v-model="usuario.email"
            required
            placeholder="Ingresa tu email"
          ></b-form-input>
        </b-form-group>
        <!---Parte Contraseña--->
        <b-form-group
          id="input-group-2"
          label="Ingrese una contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="usuario.password"
            type="password"
            required
            placeholder="Ingresa tu contraseña"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" id="form__boton" size="md">Registrar</b-button>
      </b-form>
<p>
          Para volver a la pagína anterior haz click
          <router-link :to="{ name: 'Login' }">aquí</router-link></p> 
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
import { mapActions } from "vuex";
export default {
  name: "Registrar",
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registro() {
        try {
        const user = await Firebase.auth().createUserWithEmailAndPassword(
          this.usuario.email,
          this.usuario.password
        );
        let payload = this.usuario.email
        this.$store.dispatch('setRegistrar', payload);
        this.$router.push({ name: "Principal" });

        alert("Se ha registrado con éxito");
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    },
  },
};
</script>
<style lang="scss" scope>
#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
>h3{
  font-weight: bold;
}
#form__boton {
  color: #7a0366;
  background-color: transparent;
  border: 2px #7a0366 solid;
  border-radius: 4px;

  &:focus {
      color: #a558c9;
      background-color: transparent;
      border: 2px #a558c9 solid;
      border-radius: 15px;
      transition: all 0.3s ease 0s;
    }
    &:hover {
        color: #a558c9 !important;
        border-radius: 50px;
        border-color: #a558c9 !important;
        transition: all 0.3s ease 0s;
        background: transparent;
      }
      &:active {
          color: #a558c9;
          background-color: transparent;
          border: 1px #a558c9 solid;
          border-radius: 15px;
        }
      }
}
/* Media Queries */

/* Para 600px */
@media only screen and (max-width: 620px) and (min-width: 501px) {
  #form{
    h3 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-group-2 {
      font-size: 0.9rem;
    }
    
    &__boton {
      font-size: 1rem;
    }
  }

}

/* Para 480px */
@media only screen and (max-width: 500px) and (min-width: 341px) {
  #form {
    h3 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-group-2 {
      font-size: 0.9rem;
    }
    
    
    &__boton {
      font-size: 0.9rem;
    }
  }
}  

</style>
