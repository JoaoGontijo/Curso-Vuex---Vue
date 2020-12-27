<template>
<div>
  <br><br>
  <p> Curso de Vuex </p>
  <Aulas/>
  <span>Cadastrar e Adicionar Aula</span>
  <br>
  <input placeholder="Nome" type="text" v-model="formCurso.nome">
  <input placeholder="Duracao" type="number" v-model="formCurso.duracao">
  <!-- Exemplo de Action -->
  <button @click="cadastrarAula(formCurso)">Cadastrar e Adicionar</button>
  <br><br><br>
</div>
</template>

<script>
import Aulas from './Aulas.vue'
import { mapActions } from 'vuex'

export default {
  data () {
    return{
      formCurso: {
        nome: null,
        duracao: null
      }
    }
  },
  name: 'Curso',
  components: {
    Aulas
  },
  methods: mapActions(["cadastrarAula"])
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
</style>
