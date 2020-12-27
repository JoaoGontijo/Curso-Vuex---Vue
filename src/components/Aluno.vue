<template>
<div>
  <p>Aluno - {{ this.alunoGlobal }}</p>
  <p>T : {{this.$store.AulasParticulares.teste}}</p>
</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: 'Aluno',
  computed: mapState(["alunoGlobal"]),
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
