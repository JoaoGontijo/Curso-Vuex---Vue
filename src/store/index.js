import Vue from 'vue'
import Vuex from 'vuex'
import aulasParticulares from '@/store/aulasParticulares.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // Importar os modulos necessários
  modules: {
    aulasParticulares
  },
  state: {
    aulasAssistidas: [],
    alunoGlobal: 'Jorge',
    aulas: [
      {
        nome:'MATEMATICA',
        duracao: 60
      },
      {
        nome:'PORTUGUES',
        duracao: 40
      },
      {
        nome:'QUIMICA',
        duracao: 50
      }
    ],
    aulasParticulares: [
      {
        nome:'PARTICULAR INGLES',
        duracao: 30
      },
      {
        nome:'PARTICULAR MATEMÁTICA',
        duracao: 30
      },
      {
        nome:'PARTICULAR PORTUGUES',
        duracao: 30
      }
    ]
  },
  mutations: {
    ADICIONAR_AULA (state, payload){
       state.aulasAssistidas.push(payload)
    },
    CRIAR_AULA (state, payload){
      state.aulas.push(payload)
    }
  },
  actions: {
    cadastrarEAdicionarAula (context, payload) {
      context.commit("CRIAR_AULA", payload)
      context.commit("ADICIONAR_AULA", payload)
    },
    adicionarAula(context, payload) {
      context.commit("ADICIONAR_AULA", payload)
    }
  },
  getters: {
    cursosDuracao60 (state) {
        return state.aulas.filter(aula => aula.duracao === 60)
    }
  }
})
