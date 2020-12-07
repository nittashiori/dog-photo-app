import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['register.dogTitle'], // localStorageに保存したいstoreを入れる
  })(store)
}
