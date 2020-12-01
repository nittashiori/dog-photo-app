export const state = () => ({
  doglist: [],
})

export const getters = {
  doglist(state) {
    return state.doglist
  },
}

export const mutations = {
  setDogs(state, dogsname) {
    state.doglist = dogsname
  },
}

export const actions = {
  setDogs({ commit }, dogsname) {
    commit('setDogs', dogsname)
  },
}
