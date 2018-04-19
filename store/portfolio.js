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
}

export const actions = {
}

export const strict = false