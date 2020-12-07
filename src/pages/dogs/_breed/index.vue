<template>
  <div class="container">
    <h2 class="title is-2">{{ dogTitle }}</h2>
    <div class="columns is-multiline">
      <div v-for="(item, i) in dogImageList" :key="i" class="column is-3 thumb">
        <div class="thumb__header thumb-item">
          <img class="thumb-item__image" :src="item.url" />
        </div>
        <div class="thumb__footer">
          <span v-if="current === 1 && i < 3" class="tag is-danger">NEW</span>
          <a class="button is-warning is-small" @click="item.like += 1">
            <span>いいね!{{ item.like }}件</span>
          </a>
        </div>
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

<style lang="scss" scoped>
.thumb__footer {
  margin: 10px 0 0;
}
.thumb-item {
  position: relative;
  width: 100%;
  overflow: hidden;
  &::before {
    display: block;
    content: '';
    padding-top: 75%;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
