import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {
  Vuetify,
  VApp,
  VBtn,
  VForm,
  VSelect,
  VCheckbox,
  VTextField,
  VGrid,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VTextField,
    VGrid,
    VBtn,
    VSelect,
    VCheckbox,
    VForm,
    transitions
  }
},
Vuelidate
)
