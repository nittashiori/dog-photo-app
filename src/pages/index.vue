<template>
  <div class="container">
    <div>コンテンツが入るよ</div>
    <div class="columns is-multiline">
      <div v-for="(item, i) in doglist" :key="i" class="column is-2">
        <a class="button">{{ i }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchDogName } from '~/api/fetchDogName'

export default {
  async asyncData({ store }) {
    const response = await fetchDogName
    const dogsname = response

    await store.dispatch('register/setDogs', dogsname)

    return { dogsname }
  },
  computed: {
    ...mapGetters('register', ['doglist']),
  },
}
</script>
