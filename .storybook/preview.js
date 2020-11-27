import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import 'bulma/css/bulma.min.css'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

addDecorator(withKnobs)
