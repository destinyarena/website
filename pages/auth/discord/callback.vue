<template>
  <div class="main">
    <div v-if="displayError" class="callback-container">
      <div class="error-text">
        <span>{{ error }}</span>
        <div v-if="invite">
          <iframe src="https://discordapp.com/widget?id=650109209610027034&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
        </div>
      </div>
      <div class="error-button">
        <button v-on:click="retry" class="button">
          RETRY
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayError: false,
      error: '',
      invite: false
    }
  },
  mounted () {
    this.redirectOAuth()
  },
  methods: {
    async redirectOAuth () {
      if (this.$nuxt.context.query.code && process.client) {
        try {
          const { data } = await this.$axios.get('/v2/oauth/discord/callback' + '?code=' + this.$nuxt.context.query.code)
          console.log('Token: ', data.token)
          this.$nuxt.$store.commit('auth/discord', data.token)
          this.$nuxt.context.redirect(200, '/registration')
        } catch (e) {
          console.error(e)
          if (e.response.status === 401) {
            this.error = 'Looks like you haven\'t joined the discord'
            this.invite = true
          } else if (e.response.status === 403) {
            this.error = e.response.data
          } else if (e.response.status === 400) {
            this.error = 'Looks like your token is invalid please try again'
          } else {
            this.error = 'Something went wrong on our end, please try again later'
          }
          this.displayError = true
        }
      }
    },
    retry () {
      this.$nuxt.context.redirect(200, '/registration')
    }
  }
}
</script>
