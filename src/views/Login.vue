<template>
  <div id="login">
    <div id="formulario">
      <h2>Para ingresar debe iniciar sesión</h2>
      <b-form @submit.prevent="login" id="fomulario__grupo">
        <!---Parte Email--->
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="email"
            v-model="form.email"
            required
            placeholder="Email"
          ></b-form-input>
        </b-form-group>
        <!---Parte Contraseña--->
        <b-form-group
          id="input-group-2"
          label="Contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Contraseña"
          ></b-form-input>
        </b-form-group>

        <button type="submit" id="formulario__grupo--boton">Ingresar</button>
      </b-form>
      <div id="formulario__grupo--texto">
        <p>
          Para crear un nuevo usuario haz click en
          <router-link :to="{ name: 'Registrar' }">Registrar</router-link><br />
          Si olvidaste tu contraseña haz click
          <router-link :to="{ name: 'Recuperar' }">aquí</router-link>
        </p>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      let datosUser = {
        email: this.form.email,
        password: this.form.password,
      };

      this.$store.dispatch("setLogin", datosUser);
      this.$router.replace({ name: "Principal" });
    },
  },
};
</script>
<style lang="scss" scope>
#formulario {
  margin: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    font-weight: bold;
  }
  &__grupo--boton {
    color: #bc1823;
    background-color: transparent;
    border: 2px #bc1823 solid;
    border-radius: 4px;
    font-size: 1.2rem;
    &:focus {
      color: #eb64be;
      background-color: transparent;
      border: 2px #eb64be solid;
      border-radius: 15px;
      transition: all 0.3s ease 0s;
    }
    &:hover {
      color: #eb64be !important;
      border-radius: 50px;
      border-color: #eb64be !important;
      transition: all 0.3s ease 0s;
      background: transparent;
    }
    &:active {
      color: #eb64be;
      background-color: transparent;
      border: 1px #eb64be solid;
      border-radius: 15px;
    }
  }
  &__grupo--texto {
    margin-top: 2%;
  }
}
/* Media Queries */

/* Para 600px */
@media only screen and (max-width: 620px) and (min-width: 501px) {
  #formulario {
    > h2 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-group-2 {
      font-size: 0.9rem;
    }
    &__grupo--texto {
      > p {
        font-size: 0.8rem;
      }
    }
    &__grupo--boton {
      font-size: 1rem;
    }
  }
}

/* Para 480px */
@media only screen and (max-width: 500px) and (min-width: 341px) {
  #formulario {
    > h2 {
      font-weight: bold;
      font-size: 1.3rem;
    }
    #input-group-1 {
      font-size: 0.9rem;
    }
    #input-group-2 {
      font-size: 0.9rem;
    }
    &__grupo--texto {
      > p {
        font-size: 0.8rem;
      }
    }
    &__grupo--boton {
      font-size: 1rem;
    }
  }
}
</style>
