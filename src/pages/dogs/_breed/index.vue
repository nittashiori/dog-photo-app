<template>
  <div class="container">
    <h2 class="title is-2">{{ dogTitle }}</h2>
    <div class="columns is-multiline">
      <div v-for="(item, i) in dogImageList" :key="i" class="column is-3">
        <img :src="item.url" />
        <span v-if="current === 1 && i < 3" class="tag is-danger">NEW</span>
        <a class="button is-warning is-small" @click="item.like += 1">
          <span>いいね!{{ item.like }}件</span>
        </a>
      </div>
    </div>
    <nav class="pagination" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li v-for="count in pageCount" :key="count">
          <nuxt-link
            class="pagination-link"
            :class="{ 'is-current': current == count }"
            :to="{ path: '?page=' + count }"
            append
          >
            {{ count }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchDogImage } from '~/api/fetchDogImage'

export default {
  watchQuery: ['page'],
  validate({ params }) {
    return /^[a-z]+$/.test(params.breed)
  },
  async asyncData({ store, params, query }) {
    const dogimage = await fetchDogImage(params.breed)
    const page = parseInt(query.page) || 1
    const current = parseInt(query.page) || 1
    const start = 20 * (page - 1)
    const end = start + 20

    await store.dispatch('register/setImages', dogimage.slice(start, end))
    await store.dispatch(
      'register/setPageCount',
      Math.ceil(dogimage.length / 20)
    )

    return {
      dogimage,
      page,
      current,
    }
  },
  computed: {
    ...mapGetters('register', ['dogImageList']),
    ...mapGetters('register', ['pageCount']),
    ...mapGetters('register', ['dogTitle']),
  },
}
</script>
