<template>
  <div id="app">
    <cabecera></cabecera>
    <barraNav />
  
    <router-view />
      <Footer/>
  </div>
</template>
<script>
import Firebase from "firebase";
import { mapState } from "vuex";
import cabecera from "@/components/App/header.vue";
import barraNav from "@/components/App/barraNav.vue";
import Footer from "@/components/App/Footer.vue"
export default {
  name: "app",
  components: {
    cabecera,
    barraNav,
    Footer
  },
  methods: {
    logout() {
      this.$store.dispatch("salirUsuario");
    },
  },
  computed: {
    ...mapState(["usuarioLogeado"]),
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,300&display=swap');

#app {
  font-family:'Rubik', sans-serif;
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
</style>
