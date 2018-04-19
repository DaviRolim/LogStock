export const state = () => ({
  user: null,
})
export const getters = {
  user(state) {
    return state.user
  }
}

export const mutations = {
  setUser(state, payload) {
    state.user = { ...payload }
  }
}

export const actions = {
  async setUser({ commit, dispatch, rootGetters }) {
    commit('setLoading', true, { root: true })
    let getPortfolio = rootGetters['portfolio/portfolio']
    var portfolio = []
    var lucroTotal = 0
    for (const acao of getPortfolio) {
      await dispatch('stocks/setValue', { value: acao.nome }, { root: true })
      var valorAcaoAtual = rootGetters['stocks/valor']
      const newAcao = {
        nome: acao.nome,
        valorCompra: acao.valorDaCompra,
        quantidade: acao.quantidade,
        totalGasto: acao.valorDaCompra * acao.quantidade,
        valorAtual: valorAcaoAtual,
        totalAtual: valorAcaoAtual * acao.quantidade,
        lucro: (valorAcaoAtual * acao.quantidade) - (acao.valorDaCompra * acao.quantidade)
      }
      portfolio.push(newAcao)
      lucroTotal += newAcao.lucro
    }
    await this.$axios.$get(`http://localhost:3000/api/v1/users/${1}`)
      .then(res => {
        const user = {
          ...res,
          lucro: lucroTotal
        }
        commit('setUser', user)
        commit('setLoading', false, { root: true })
      })
      .catch(err => {
        commit('setLoading', false, { root: true })
        console.log(err)
      })

  }
}