<template>
  <div id="inicioBotones">
    <div>
      <b-button @click="login" class="inicioBotones__btn" size="lg">Ingresa Aquí</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "inicioBotones",
  methods: {
    registrar() {
      this.$router.push({ name: "Registrar" });
    },
    login() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.inicioBotones__btn{
    color: #17B277;
    background-color: transparent;
    border: 1px #17B277 solid;
}

.inicioBotones__btn:hover {
color: #01C1CE !important;
border-radius: 50px;
border-color: #01C1CE !important;
transition: all 0.3s ease 0s;
background: transparent !important;
}
.inicioBotones__btn:active {
color: #01C1CE !important;
border-radius: 50px;
border-color: #01C1CE !important;
transition: all 0.3s ease 0s;
background: transparent !important;
}
.inicioBotones__btn:focus {
color: #01C1CE !important;
border-radius: 50px;
border-color: #01C1CE !important;
transition: all 0.3s ease 0s;
background: transparent !important;
}
</style>