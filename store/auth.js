export const state = () => ({
  discord: null,
  bungie: null,
  faceit: null
})

export const mutations = {
  discord (state, token) {
    state.discord = token
  },

  bungie (state, token) {
    state.bungie = token
  },

  faceit (state, token) {
    state.faceit = token
  }
}
