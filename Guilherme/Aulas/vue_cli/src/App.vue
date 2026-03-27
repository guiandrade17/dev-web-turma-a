<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Meu App Vue</h1>
  <p class="subtitulo">Meu subtitulo</p>
  
     <home-component />
     <br />
     <home-component />
     <br />
     <usuario-component />
     <br />
     <estilo-component />
  </div>
  
  
</template>

<script>
import EstiloComponent from './components/EstiloComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    EstiloComponent,
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: darkmagenta;
  text-align: center;
};
.subtitulo {
  color: darkseagreen;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
};
</style>
