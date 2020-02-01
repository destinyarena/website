<template>
  <div class="body">
    <div class="section">

      <!--
        Discord
      -->
      <div class="tile">
        <div class="tile-header discord-branding">
          <div class="tile-header-icon">
            <img src="@/assets/images/discord.svg"></img>
          </div>

          <div class="tile-header-text">
            <span>DISCORD</span>
          </div>
        </div>

        <div class="tile-body">
          <span>Username: Arturo#0001</span>
        </div>

        <div class="tile-footer">
          <button v-on:click="discordClick" class="button">
            <span>LOGIN</span>
          </button>
        </div>
      </div>

      <!--
        Bungie
      -->
      <div class="tile">
        <div class="tile-header bungie-branding">
          <div class="tile-header-icon">
            <img src="@/assets/images/bungie.png"></img>
          </div>

          <div class="tile-header-text">
            <span>BUNGIE</span>
          </div>
        </div>

        <div class="tile-body">
          <span>Username: Arturo#0001</span>
        </div>

        <div class="tile-footer">
          <button v-on:click="faceitClick" class="button">
            <span>LOGIN</span>
          </button>
        </div>
      </div>

      <!--
        Faceit
      -->
      <div class="tile">
        <div class="tile-header faceit-branding">
          <div class="tile-header-icon">
            <img src="@/assets/images/faceit.png"></img>
          </div>

          <div class="tile-header-text">
            <span>FACEIT</span>
          </div>
        </div>

        <div class="tile-body">
          <span>Username: Arturo#0001</span>
        </div>

        <div class="tile-footer">
          <button v-on:click="faceitClick" class="button">
            <span>LOGIN</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tokens: {
        discord: null,
        faceit: null,
        bungie: null
      },
      profiles: {
        discord: {
          show: false,
          id: '',
          username: '',
          discriminator: ''
        },
        faceit: {
          show: false,
          id: '',
          username: ''
        },
        bungie: {
          show: false,
          id: '',
          username: '',
          xbox: '',
          psn: '',
          steam: '',
          blizzard: ''
        }
      }
    }
  },
  mounted () {
    this.populate()
  },
  methods: {
    populate () {
      if (process.client) {
        this.tokens.discord = this.$nuxt.$store.state.auth.discord
        this.tokens.bungie = this.$nuxt.$store.state.auth.bungie
        this.tokens.faceit = this.$nuxt.$store.state.auth.faceit
      }
    },

    async discordClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/discord/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.error(e)
      }
    },
    async bungieClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/bungie/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.error(e)
      }
    },
    async faceitClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/faceit/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.error(e)
      }
    },

    // Recaptcha Stuff
    onError (error) {
      console.log(error)
    },

    onSuccess (token) {
      console.log('Succeeded: ', token)
    },

    onExpired () {
      console.log('Fuck you')
    }
  }
}
</script>
