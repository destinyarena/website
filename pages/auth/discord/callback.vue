<template>
  <div>
    Xenith's mexican place
  </div>
</template>

<script>
export default {
  data () {
    return {
      callbackUrl: '/oauth/discord/callback',
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
          const { data } = await this.$axios.get(this.callbackUrl + '?code=' + this.$nuxt.context.query.code + '&state=' + this.$nuxt.context.query.state)
          console.log('Token: ', data.token)
          this.$nuxt.$store.commit('auth/discord', data.token)
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
