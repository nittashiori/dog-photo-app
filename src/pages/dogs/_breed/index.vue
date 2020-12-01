<template>
  <div class="container">
    <div class="columns is-multiline">
      <h2></h2>
      <div v-for="(item, i) in dogimage" :key="i" class="column is-3">
        <img :src="item.url" />
        <span v-if="i < 3" class="tag is-danger">NEW</span>
        <a class="button is-warning is-small" @click="item.like += 1">
          <span>いいね!{{ item.like }}件</span>
        </a>
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
