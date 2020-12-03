export const state = () => ({
  dogNameList: [],
  dogImageList: [],
  pageCount: 1,
})

export const getters = {
  dogNameList(state) {
    return state.dogNameList
  },
  dogImageList(state) {
    return state.dogImageList
  },
  pageCount(state) {
    return state.pageCount
  },
}

export const mutations = {
  setDogs(state, dogname) {
    state.dogNameList = dogname
  },
  setImages(state, dogimage) {
    state.dogImageList = dogimage
  },
  setPageCount(state, pagecount) {
    state.pageCount = pagecount
  },
}

export const actions = {
  setDogs({ commit }, dogname) {
    commit('setDogs', dogname)
  },
  setImages({ commit }, dogimage) {
    commit('setImages', dogimage)
  },
  setPageCount({ commit }, pagecount) {
    commit('setPageCount', pagecount)
  },
}
