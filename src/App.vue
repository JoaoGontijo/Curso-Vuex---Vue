<template>
  <div id="app">
    <Aluno/>
    <Curso/>
    <p> Aulas Assistidas</p>
    <ul>
      <li v-for="(aula, index) in aulasAssistidas" :key="index">
        {{ aula.nome }} - {{ aula.duracao }}
      </li>
    </ul>
  </div>
</template>

<script>
import Aluno from './components/Aluno.vue';
import Curso from './components/Curso.vue';
import {mapState} from 'vuex';
export default {
  name: 'App',
  components: {
    Aluno,
    Curso
  },
  computed: mapState(["aulasAssistidas"]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;
}
</style>
