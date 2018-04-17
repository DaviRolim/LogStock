export const state = () => ({
  user: null
})
export const getters = {
  user(state) {
    return state.user
  }
}

export const mutations = {
  setUser(state, payload) {
    console.log('mutations: ' + payload)
    state.user = {...payload}
  }
}

export const actions = {
  async setUser({commit}) {
    await this.$axios.$get(`http://localhost:3000/api/v1/users/${2}`)
    .then(res => {
      const user = {...res}
      commit('setUser', user)
    })
    .catch(err => {
      console.log(err)
    })
      
  }
}