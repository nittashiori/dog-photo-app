export const state = () => ({
  doglist: [],
})

export const getters = {
  doglist(state) {
    return state.doglist
  },
}

export const mutations = {
  setDogs(state, dogs) {
    state.doglist = dogs
  },
}

export const actions = {
  setDogs({ commit }, dogs) {
    commit('setDogs', dogs)
  },
}
