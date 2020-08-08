import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
/* import createPersistedState from "vuex-persistedstate";
 */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioLogeado: false,
    user_login: [],
    videos: [{
        id: 1,
        titulo: "¿Cómo le afectan las redes sociales a los estudiantes del colegio Victoria Prieto?",
        Integrantes: "Antonia Godoy y Ana Palfitt",
        Colegio: "Colegio Victoria Prieto",
        src: ('https://www.youtube.com/embed/tb-DwLQ4SJo?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 2,
        titulo: "Un novedoso y económico uso de las bolsas de té usadas como una nueva opción de abono orgánico",
        Integrantes: "Catalina Curamil y Thiare Vildó",
        Colegio: "Liceo Siete de Providencia Luisa Saavedra",
        src: ("https://www.youtube.com/embed/J9iZFq0j5G8?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0"),
      },
      {
        id: 3,
        titulo: "Adaptaciones ecológicas para la rana grande chilena",
        Integrantes: "Martina Riffo y Javiera Coñas",
        Colegio: "Colegio Santiago de Pudahuel",
        src: ('https://www.youtube.com/embed/s_mY9WpMj-c?controls=0&enablejsapi=1&origin=http://congreso-penorte.web.app/&modestbranding=1&showinfo=0'),
      },
      {
        id: 4,
        titulo: "Embutidos de Lupinus Albus: súper proteico, sustentable, bajo en grasas y cero calorías",
        Integrantes: "Felipe Araya, Winston Bello, Lautaro Morales y Antonia Orellana",
        Colegio: "Colegio Emprender Larapinta",
        src: ('https://www.youtube.com/embed/SSGyF1si8K0?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 5,
        titulo: "Lookation",
        Integrantes: "Mikel Anía y Sebastián Lorca",
        Colegio: "NeoEduca Chile",
        src: ('https://www.youtube.com/embed/rv-TcP4gr1o?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 6,
        titulo: "Bacterias Musicales",
        Integrantes: "Nicolás Besnier y  Franscisca Kostak",
        Colegio: "Instituto de Humanidades Luis Campino",
        src: ('https://www.youtube.com/embed/YTQ0GzoNCaM?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 7,
        titulo: "Efecto de aguas contaminada con Litio en la germinación de Lens Culinaris y Phaseolus Vulgaris",
        Integrantes: "Gonzalo Meléndez Rojas y Fracisco Rogers Artaza",
        Colegio: "Instituto de Humanidades Luis Campino",
        src: ('https://www.youtube.com/embed/pM-slfkQ2wE?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 8,
        titulo: "Una comunidad animal invisible para la gente",
        Integrantes: "Nicolás Díaz y Esteban Navarrete",
        Colegio: "Liceo Manuel Barros Borgoño",
        src: ('https://www.youtube.com/embed/uagqDcT42Aw?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 9,
        titulo: "S.A.R.A.H. (Sistema Automático de Radiofrecuencia para la Automatización del Hogar)",
        Integrantes: "Felipe Martínez y Nicolás Matínez",
        Colegio: "Instituto de Humanidades Luis Campino",
        src: ('https://www.youtube.com/embed/iDglr1dwmX8?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 10,
        titulo: "Galleria mellonella, una posible solución a la biodegradación del plástico: Hallazgo de enterobacterias posiblemente implicadas en la biodegradación del Polietileno",
        Integrantes: "Rodrigo Arévalo, Catalina Muñoz, Bárbara Guerrero y Ángela Mardones",
        Colegio: "Colegio Santiago de Pudahuel",
        src: ('https://www.youtube.com/embed/W8unmD9exx4?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },

      {
        id: 11,
        titulo: "NatuDiesel",
        Integrantes: "Franco Delgado y Jesús Valderrama",
        Colegio: "Instituto Nacional General José Miguel Carrera",
        src: ('https://www.youtube.com/embed/DrPDTUe5Yeo?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
      },
      {
        id: 12,
        titulo: "FisicFUN",
        Integrantes: "Andrea Arias y Maria Palma",
        Colegio: "Liceo Nº1 Javiera Carrera",
        src: ('https://www.youtube.com/embed/SoWd1jR0tAE?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
       },
      {
        id: 13,
        titulo: "Producción de Bioplástico a partir de la cáscara de plátano",
        Integrantes: "Mateo Jabat, Rodrigo Rojas, Cristobal Muñoz y Matias Videla",
        Colegio: "Colegio San José de Chicureo",
        src: ('https://www.youtube.com/embed/55s1hx_5kWw?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
       },
      {
        id: 14,
        titulo: "Sufriendo por la baja cantidad de agua apta para el consumo humano",
        Integrantes: "Maria Paz Dziejarski, Martina Castillo, Madelaine Vasquez y Ángela Roman",
        Colegio: "Escuela Primitiva Echeverria",
        src: ('https://www.youtube.com/embed/yFL7oXO9qRQ?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
          },
      {
        id: 15,
        titulo: "Highway to Shell",
        Integrantes: "Ignacio Pedemonte y Daniel Sánchez",
        Colegio: "Colegio William Kilpatrick",
        src: ('https://www.youtube.com/embed/qQ9A856WLLk?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
         },
      {
        id: 16,
        titulo: "Clasificando arañas (Araneae) a través de sus cromosomas",
        Integrantes: "Matilda Améstica, Fernanda Cabello, María Cossio y Catalina Montecinos",
        Colegio: "Fundación Educacional Desiree",
        src: ('https://www.youtube.com/embed/vQmoEkYFSks?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
            },
      {
        id: 17,
        titulo: "Creación de envases biodegradables para frutillas a partir de alginatos obtenidos de algas pardas.",
        Integrantes: "Trinidad Becerra, Catalina Rojas, Vicente Carrasco y Fernanda Jaramillo",
        Colegio: "Colegio San José de Chicureo",
        src: ('https://www.youtube.com/embed/SwrG-pRI_-o?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
           },
      {
        id: 18,
        titulo: "En busca de la verdad sobre las bolsas biodegradables",
        Integrantes: "Stefany Herrera, Fabián González, Sara Valentina y Manuel Gómez",
        Colegio: "Escuela Ciudad de Santiago de Chile E-70",
        src: ('https://www.youtube.com/embed/9JLcCcBPA6k?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
           },
      {
        id: 19,
        titulo: "Análisis comparado entre hábitos polinizadores de Xylocopa augusti y Bombus dahlbomii en el parque urbano Quinta Normal",
        Integrantes: "Sol Arancibia, Fernanda Bascuñán, Cristina Escobar, María Jesús Ortega y Josefa Rivas",
        Colegio: "Liceo Carmela Silva Donoso",
        src: ('https://www.youtube.com/embed/cu2ozxE-1S0?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
           },
      {
        id: 20,
        titulo: "Elaboración de un bioplástico a base de almidón de papa o maíz",
        Integrantes: "Paz Rodríguez, Vicente Rivera, Nathaly Escalante, Carolina Rodríguez y Matías De la Fuente",
        Colegio: "Colegio San Isaac Jogues",
        src: ('https://www.youtube.com/embed/bcqiFEZW6Gg?controls=0&enablejsapi=1&origin=localhost:8080&modestbranding=1&showinfo=0'),
        }


    ]
  },
  mutations: {
    SET_LOGIN(state, datosUser) {
      state.usuarioLogeado = true;
      state.user_login.push(datosUser.email);
    },
    SALIR_USUARIO(state) {
      state.usuarioLogeado = false;
    },
    SET_REGISTRAR(state, payload){
      state.usuarioLogeado = true;
      state.user_login.push(payload);
    }
  },
  actions: {
    setLogin({
      commit
    }, datosUser) {
      Firebase.auth()
        .signInWithEmailAndPassword(datosUser.email, datosUser.password)
        .then((user) => {
          alert(`Haz entrado ${datosUser.email}`);
          commit('SET_LOGIN', datosUser);

        })
        .catch(function (error) {
          alert(error.message);
          // Error Handling
        });
    
    },
    setRegistrar({
      commit
    }, payload){
      commit('SET_REGISTRAR', payload);

    },
    salirUsuario({
      commit
    }) {
      Firebase.auth()
        .signOut()
        .then(() => {
          commit('SALIR_USUARIO')
        
        });

    }
  },
  modules: {},
/*   plugins: [createPersistedState()]
 */})