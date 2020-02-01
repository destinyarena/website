<template>
  <div class="main">
    <div v-if="displayError" class="error-item">
      {{ Error }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayError: false,
      Error: ''
    }
  },
  mounted () {
    this.redirectOAuth()
  },
  methods: {
    async redirectOAuth () {
      if (this.$nuxt.context.query.code && this.$nuxt.context.query.state && process.client) {
        try {
          const { data } = await this.$axios.get('/oauth/bungie/callback' + '?code=' + this.$nuxt.context.query.code + '&state=' + this.$nuxt.context.query.state)
          console.log('Token: ', data.token)
          this.$nuxt.$store.commit('auth/bungie', data.token)
          this.$nuxt.context.redirect(200, '/registration')
        } catch (e) {
          console.error(e)
          this.displayError = true
          this.Error = 'Invalid OAuth code please try again'
        }
      }
    }
  }
}
</script>
