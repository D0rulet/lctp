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

<style lang="scss">
.application--wrap {
  background: url(assets/login-bg.jpg) no-repeat center center;
  background-size: cover;
}
</style>
