<template>
  <div class="container">
    <div>コンテンツが入るよ</div>
    <div>{{ dogs }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ store }) {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    const dogs = response.data.message

    await store.dispatch('register/setDogs', dogs)

    return { dogs }
  },
}
</script>
