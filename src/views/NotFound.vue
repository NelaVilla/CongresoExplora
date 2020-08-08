<template>
    <div id="NotFound">
<h2>La página que busca no existe, haz click <router-link :to="{name :'Home'}" >aquí</router-link> para ir a la página de inicio </h2>
<router-view/>
    </div>
</template>

<script>
    export default {
      name:"Not Found"  
    }
</script>

<style lang="scss" scoped>
#NotFound{
    margin: 10%;
}

</style>