<template>
    <div id="barraNav">
    <!---Barra navegación---->
<b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/">RM Norte</b-navbar-brand>
 
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" id="nav__der">
                <b-nav-item href="#bienvenida" v-show="!usuarioLogeado" right>Bienvenidos todas y todos</b-nav-item>
                <b-nav-item v-for="(user,index) in user_login" :key="index" href="#bienvenida" v-show="usuarioLogeado" right>Hola {{user_login[0]}}</b-nav-item>
                <logOut v-show="usuarioLogeado"/>
              
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import logOut from '@/components/App/logOut.vue'
    export default {
        name:"barraNav",
    
    components:{
      logOut
    },
    computed: {
      ...mapState(['user_login', 'usuarioLogeado'])
    },
    }
</script>

<style lang="scss" scoped>
$color-navbar: #17B277;
#nav__der{
  align-items: center;
}
.navbar {
background-color:$color-navbar;
}

</style>