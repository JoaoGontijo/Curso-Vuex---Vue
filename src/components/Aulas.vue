<template>
<div>
  <ul>
    <!-- Exemplo de State -->
    <p>Aulas Padrão</p>
    <li v-for="aula in aulas" :key="aula.nome">
        <p> {{aula.nome}} | Duracao: {{aula.duracao}}min</p>
        <!-- Exemplo de Mutation -->
        <button @click="cadastrarEAdicionarAula(aula)">Adicionar Aula</button>
    </li>
  </ul>
  <br><br><hr>
  <ul>
    <!-- Exemplo de State -->
    <p>Aulas Particulares</p>
    <li v-for="aula in aulasParticulares" :key="aula.nome">
        <p> {{aula.nome}} | Duracao: {{aula.duracao}}min</p>
        <!-- Exemplo de Mutation -->
        <button @click="adicionarAula(aula)">Adicionar Aula</button>
    </li>
  </ul>
  <br><br>
  <hr>
  <h1>Aulas Assistidas</h1>
  <span>Aulas com 60 min de duração</span>
  <ul>
    <!-- Exemplo de Getter -->
    <li v-for="aula in cursosDuracao60" :key="aula.nome">
        <p> {{aula.nome}} </p>
    </li>
  </ul>
  <br>
  <span>Aulas Particulares Realizadas</span>
  <br><br><br>
  <hr>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Aulas',
  methods: {
    cadastrarAula(aula){
      this.$store.commit("AulasParticulares/ADICIONAR_AULA", {
        aula}
        )
    }
  },
  computed: {
    ...mapState(["aulas", "aulasParticulares"]),
    ...mapGetters(["cursosDuracao60"])
  },
  created () {
    console.log(this.$store)
    console.log(this.$store.AulasParticulares)
  }
}
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
</style>
