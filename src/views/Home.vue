<template>
  <div class="home">
    <div>
      <b-card id="bienvenida"  class="home__bienvenida text-justify ho">
        <div class="home__bienvenida--texto">
          Te damos la bienvenida al XIV Congreso Regional Escolar de Ciencia y
          Tecnología, iniciativa organizada por Explora Región Metropolitana
          Zona Norte del Ministerio de Ciencia, Tecnología, Conocimiento e
          Innovación, liderado por la Universidad de Chile a través de la
          Facultad de Ciencias Químicas y Farmacéuticas y su unidad ejecutora el
          Centro Avanzado de Enfermedades Crónicas (ACCDiS), el cual se
          realizará por primera vez de manera virtual entre el viernes 30 julio
          y lunes 10 de agosto. Serán parte de esta aventura estudiantes desde
          5° año de educación básica hasta 4° año de educación media, de
          establecimientos educacionales de las comunas de Colina, Lampa, Las
          Condes, Ñuñoa, Providencia, Pudahuel, Quilicura, Renca y Santiago,
          los/as que compartirán los resultados de sus proyectos de
          investigación realizados durante el 2019, en las áreas de las ciencias
          naturales, ciencias sociales e ingeniería y tecnología. 
           <br><b>¡Mucho ánimo a todos los equipos participantes!</b>
        </div>
      </b-card>
    </div>
    <div class="home__bienvenida--ingreso">
      <ingreso />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ingreso from "../components/Home/ingreso";
export default {
  name: "Home",
  components: {
    ingreso,
  },
};
</script>
<style lang="scss" scope>
.home__bienvenida {
  margin: 5% 15% 2% 15%;
  border: 0 transparent;
  &--texto {
    font-size: 1rem;
    padding: 0 5% 0 5%;
    text-align-last: center;
  }

  &--ingreso{
    margin-bottom: 2%;
  }
}
</style>
