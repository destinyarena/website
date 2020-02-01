export const state = () => ({
  discord: null,
  bungie: null,
  faceit: null
})

export const mutations = {
  discord (state, token) {
    if (!token) {
      state.discord = null
    } else {
      state.discord = token
    }
  },

  bungie (state, token) {
    if (!token) {
      state.bungie = null
    } else {
      state.bungie = token
    }
  },

  faceit (state, token) {
    if (!token) {
      state.faceit = null
    } else {
      state.faceit = token
    }
  }
}
