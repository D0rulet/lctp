import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {
  Vuetify,
  VChip,
  VAvatar,
  VApp,
  VMenu,
  VList,
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
    VChip,
    VAvatar,
    VMenu,
    VList,
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
