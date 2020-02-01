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
      if (this.$nuxt.context.query.code && process.client) {
        try {
          const { data } = await this.$axios.get('/oauth/faceit/callback' + '?code=' + this.$nuxt.context.query.code)
          console.log('Token: ', data.token)
          this.$nuxt.$store.commit('auth/faceit', data.token)
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
