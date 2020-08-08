<template>
    <div id="botonLogOut">
 
 <button id="boton__lO" @click="logOut">
     Cerrar Sesión
 </button>
    </div>
</template>

<script>
import Firebase from 'firebase'
    export default {
        name:"botonLogOut",
        methods: {
            logOut(){
      this.$store.dispatch('salirUsuario')
              this.$router.replace({ name: "Home" });

           }
        },
        
    }
</script>

<style lang="scss" scoped>
#boton__lO{
    color: #fdf5ec;
    background-color: transparent;
    border: 1px solid #fdf5ec;
}
#boton__lO:hover{
    color: #5bd8ec;
    background-color: transparent;
    border: 1px solid #5bd8ec;
    border-radius: 15px;
    transition: all 0.3s ease 0s;
}
#boton__lO:focus{
    color: #5bd8ec;
    background-color: transparent;
    border: 1px solid #5bd8ec;
    border-radius: 15px;
     transition: all 0.3s ease 0s;
}
#boton__lO:active{
    color: #5bd8ec;
    background-color: transparent;
    border: 1px solid #5bd8ec;
    border-radius: 15px;
     transition: all 0.3s ease 0s;
}
</style>