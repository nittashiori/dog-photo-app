<template>
  <div class="container">
    <div>コンテンツが入るよ</div>
    <div>{{ dogs }}</div>
    <div class="columns is-multiline">
      <div v-for="(item, i) in doglist" :key="i" class="column is-2">
        <a class="button">{{ i }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    const dogs = response.data.message

    await store.dispatch('register/setDogs', dogs)

    return { dogs }
  },
  computed: {
    ...mapGetters('register', ['doglist']),
  },
}
</script>
