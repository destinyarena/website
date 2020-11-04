<template>
  <div class="main">
    <div v-if="displayError" class="callback-container">
      <div class="error-text">
        <span>{{ Error }}</span>
      </div>
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
      if (this.$nuxt.context.query.code && process.client) {
        try {
          const { data } = await this.$axios.get('/v2/oauth/bungie/callback' + '?code=' + this.$nuxt.context.query.code)
          console.log('Token: ', data.token)
          this.$nuxt.$store.commit('auth/bungie', data.token)
          this.$nuxt.context.redirect(200, '/registration')
        } catch (e) {
          console.error(e)
          this.$sentry.captureException(e)
          this.displayError = true
          if (e.response.status === 401) {
            this.Error = e.response.data
          } else {
            this.Error = 'Looks like something went wrong while connecting your bungie account, please try again.'
          }
        }
      }
    }
  }
}
</script>
