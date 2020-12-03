export const state = () => ({
  dogNameList: [],
  dogImageList: [],
  pageCount: 1,
  dogTitle: '',
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
  dogTitle(state) {
    return state.dogTitle
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
  setDogTitle(state, dogtitle) {
    state.dogTitle = dogtitle
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
  setDogTitle({ commit }, dogtitle) {
    commit('setDogTitle', dogtitle)
  },
}
