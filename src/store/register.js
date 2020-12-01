export const state = () => ({
  dogNameList: [],
  dogImageList: [],
})

export const getters = {
  dogNameList(state) {
    return state.dogNameList
  },
  dogImageList(state) {
    return state.dogImageList
  },
}

export const mutations = {
  setDogs(state, dogname) {
    state.dogNameList = dogname
  },
  setImages(state, dogimage) {
    state.dogImageList = dogimage
  },
}

export const actions = {
  setDogs({ commit }, dogname) {
    commit('setDogs', dogname)
  },
  setImages({ commit }, dogimage) {
    commit('setImages', dogimage)
  },
}
