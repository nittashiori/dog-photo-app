<template>
  <div class="container">
    <div class="columns is-multiline">
      <div v-for="(item, i) in dogimage" :key="i" class="column is-3">
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchDogImage } from '~/api/fetchDogImage'

export default {
  async asyncData({ store, params }) {
    const dogimage = await fetchDogImage(params.breed)

    await store.dispatch('register/setImages', dogimage)

    return { dogimage }
  },
  computed: {
    ...mapGetters('register', ['dogImageList']),
  },
}
</script>
