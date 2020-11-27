import NavBar from './index.vue'

export default {
  title: 'Atoms/NavBar',
  component: NavBar,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { NavBar },
  template: '<nav-bar />',
})
