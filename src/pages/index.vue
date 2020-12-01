<template>
  <div class="container">
    <div class="columns is-multiline">
      <div v-for="(item, i) in dogNameList" :key="i" class="column is-2">
        <!-- <a class="button">{{ i }}</a> -->
        <nuxt-link :to="{ path: 'dogs/' + i }" class="button">
          {{ i }}
        </nuxt-link>
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
    const dogname = response

    await store.dispatch('register/setDogs', dogname)

    return { dogname }
  },
  computed: {
    ...mapGetters('register', ['dogNameList']),
  },
}
</script>
