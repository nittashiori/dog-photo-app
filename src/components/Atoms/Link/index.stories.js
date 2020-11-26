import Link from './index.vue'

export default {
  title: 'Atoms/Link',
  component: Link,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Link },
  template: '<Link />',
})
