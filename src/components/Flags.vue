<template>
  <div>
    <v-menu offset-y>
      <v-btn flat small slot="activator"><img src="../assets/flags/blank.gif" :class="['flag flag-' + activeLanguage]" /></v-btn>
      <v-list>
        <v-list-tile v-for="(item, key) in availableLanguages" :key="item.key" @click="setActiveLanguage(key)">
          <v-avatar>
            <img src="../assets/flags/blank.gif" :class="['flag flag-' + key]" :alt="item" />
          </v-avatar>
          <v-list-tile-title>
            {{item}}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeLanguage: 'gb',
      availableLanguages:
        {
          'ro': 'Romanian',
          'nl': 'Netherlands',
          'gb': 'Great Britain'
        }

    }
  },
  methods: {
    setActiveLanguage (languageCode) {
      this.activeLanguage = languageCode
      this.$i18n.locale = languageCode
    }
  },
  name: 'Flags'
}
</script>

<style scoped>
/*!
 * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/)
 */
 .flag {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('../assets/flags/flags.png') no-repeat;
}

.flag.flag-gb {
    background-position: -32px 0;
}

.flag.flag-nl {
    background-position: -64px 0;
}

.flag.flag-ro {
    background-position: 0 -32px;
}

.flag.flag-us {
    background-position: -32px -32px;
}
</style>
