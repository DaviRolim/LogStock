export const state = () => ({
  portfolio: [{
    nome: 'GGBR4.SA',
    quantidade: 200,
    valorDaCompra: 16.22,
    user: 1
  },
  {
    nome: 'GOAU4.SA',
    quantidade: 500,
    valorDaCompra: 7.21,
    user: 1
  }],

})
export const getters = {
  portfolio(state) {
    return state.portfolio
  }
}

export const mutations = {
  setInPortfolio(state, payload) {
    state.portfolio.push(payload)
  },
  deleteInPortfolio(state, payload) {
    var index = state.portfolio
    .findIndex(item => item.nome === payload.nome & item.user == payload.user)
    state.portfolio.splice(index, 1)
  }
}

export const actions = {
  setInPortfolio({ commit }, payload) {
    commit('setInPortfolio', payload)
  },
  deleteInPortfolio ({commit}, payload) {
    commit('deleteInPortfolio', payload)
  }
}

export const strict = false