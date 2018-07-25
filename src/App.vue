<template>
<div>
  <v-app>
    <router-view></router-view>
  </v-app>
</div>
</template>

<script>
import Login from '@/views/Login'
export default {
  components: {
    Login
  }
}
</script>
