export default({
  state: {
    teste:'teste'
  },
  mutations: {
    ADICIONAR_AULA (state, payload){
      state.aulas.push(payload)
    }
  },
  actions: {
    adicionarAula(context, payload) {
      context.commit("ADICIONAR_AULA", payload)
    }
  }
})
