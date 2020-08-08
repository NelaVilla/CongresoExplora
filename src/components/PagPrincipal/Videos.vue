<template>
  <div class="videos-congreso">
    <div id="videos" class="container">
      <div class="videos__cards">
        <!---Card-video--->

        <div
          class="videos__cards--card"
          v-for="(video, index) in videos"
          :key="index"
        >
          <!---Video-->
          <b-embed
            type="iframe"
            controls
            controlslist="nodownload"
            class="video__cards--video"
            :src="video.src"
          >
          </b-embed>
          <!---card texto--->
          <div class="videos__cards--texto">
            <h5>
              {{ video.titulo }}
            </h5>

            <p>{{ video.Integrantes }}</p>

            <p class="videos__cards--texto--colegio">{{ video.Colegio }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Video",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["videos"]),
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#videos {
  margin-top: 2%;
  padding: 2% 2%;
}
h5 {
  text-align: center;
}

.videos__cards {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5rem;
  grid-auto-flow: row;

  &--video {
    height: 300px;
    width: 400px;
  }
  &--card {
    display: grid;
    align-items: stretch;
    justify-content: stretch;
  }
  &--texto {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 12rem;
    margin:2% 2%;
    >h5{
      font-weight: bold;
    }
    &--colegio{
    font-style: italic;    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

//Media Queries
/* Para 800px */
/* Para 960px */  
@media only screen and (max-width: 980px) and (min-width: 821px) {  
  .videos__cards {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
     &--texto {
      > h5 {
        font-size: 1.1rem;
        font-weight: bold;
      }
      > p {
        font-size: 0.8rem;
      }
    }
  }
} 
@media only screen and (max-width: 820px) and (min-width: 621px) {
.videos__cards {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
     &--texto {
      > h5 {
        font-size: 1.3rem;
        font-weight: bold;
      }
      > p {
        font-size: 1.2rem;
      }
    }
  }
}

/* Para 600px */
@media only screen and (max-width: 620px) and (min-width: 501px) {
  .videos__cards {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
     &--texto {
      > h5 {
        font-size: 1.2rem;
        font-weight: bold;
      }
      > p {
        font-size: 1rem;
      }
    }
  }
}

/* Para 480px */
@media only screen and (max-width: 500px) and (min-width: 341px) {
  .videos__cards {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    &--texto {
      > h5 {
        font-size: 20px;
        font-weight: bold;
      }
      > p {
        font-size: 15px;
      }
    }
  }
}
</style>
