<template>
  <div class="body">
    <!--
      Registration Logo
    -->
    <div class="registration-title">
      <img src="~/assets/images/logo.jpg"></img>
      <span>REGISTRATION</span>
    </div>
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

        <div class="tile-body" v-if="profiles.discord.show">
          <div class="tile-body-item">
            <span class="key">
              Username:
            </span>
            <span class="value">
              {{ profiles.discord.username }}#{{ profiles.discord.discriminator }}
            </span>
          </div>
        </div>
        <div class="tile-body" v-else>
          <div class="tile-body-item">
            <span>Please link your account</span>
          </div>
        </div>

        <div class="tile-footer">
          <button v-on:click="discordClick" class="button">
            <span>LINK</span>
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

        <div class="tile-body" v-if="profiles.bungie.show">
          <div class="tile-body-item">
            <span class="key">
              Username:
            </span>
            <span class="value">
              {{ profiles.bungie.username }}
            </span>
          </div>

          <div class="tile-body-item" v-if="profiles.bungie.steam">
            <span class="key">
              Steam:
            </span>
            <span class="value">
              {{ profiles.bungie.steam }}
            </span>
          </div>
          <div class="tile-body-item" v-if="profiles.bungie.psn">
            <span class="key">
              PSN:
            </span>
            <span class="value">
              {{ profiles.bungie.psn }}
            </span>
          </div>
          <div class="tile-body-item" v-if="profiles.bungie.xbox">
            <span class="key">
              Xbox:
            </span>
            <span class="value">
              {{ profiles.bungie.xbox }}
            </span>
          </div>
        </div>
        <div class="tile-body" v-else>
          <div class="tile-body-item">
            <span>Please link your account</span>
          </div>
        </div>

        <div class="tile-footer">
          <button v-on:click="bungieClick" class="button">
            <span>LINK</span>
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

        <div class="tile-body" v-if="profiles.faceit.show">
          <div class="tile-body-item">
            <span class="key">
              Username:
            </span>
            <span class="value">
              {{ profiles.faceit.username }}
            </span>
          </div>
        </div>
        <div class="tile-body" v-else>
          <div class="tile-body-item">
            <SPAn>Please link your account</span>
          </div>
        </div>

        <div class="tile-footer">
          <button v-on:click="faceitClick" class="button">
            <span>LINK</span>
          </button>
        </div>
      </div>
    </div>

    <!--
      Footer
    -->
    <div class="registration-footer">
      <div v-if="error" class="error">
        <span>{{ error }}</span>
      </div>
      <div class="recaptcha-container">
      </div>
      <div class="buttons">
        <div class="reset">
          <button v-on:click="loginReset" class="button">
            RESET
          </button>
        </div>
        <div class="register">
          <button v-on:click="submitRegistration" class="button">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadDiscordProfile, loadBungieProfile, loadFaceitProfile } from '~/utils/jwt.js'

export default {
  data () {
    return {
      error: null,
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

        if (this.tokens.discord) {
          this.profiles.discord = loadDiscordProfile(this.tokens.discord)
        }

        if (this.tokens.bungie) {
          this.profiles.bungie = loadBungieProfile(this.tokens.bungie)
        }

        if (this.tokens.faceit) {
          this.profiles.faceit = loadFaceitProfile(this.tokens.faceit)
        }
      }
    },

    async discordClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/discord/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.log(e)
        this.error = 'Looks like we are having issues please try again later'
      }
    },
    async bungieClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/bungie/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.log(e)
        this.error = 'Looks like we are having issues please try again later'
      }
    },
    async faceitClick (event) {
      try {
        const { data } = await this.$nuxt.$axios.get('/oauth/faceit/authurl')
        console.log(data)
        window.location.href = data
      } catch (e) {
        console.log(e)
        this.error = 'Looks like we are having issues please try again later'
      }
    },

    loginReset (event) {
      console.log('Reseting Logins...')
      this.tokens.discord = null
      this.tokens.faceit = null
      this.tokens.bungie = null

      this.profiles.bungie.show = false
      this.profiles.faceit.show = false
      this.profiles.discord.show = false

      this.$nuxt.$store.commit('auth/discord', null)
      this.$nuxt.$store.commit('auth/faceit', null)
      this.$nuxt.$store.commit('auth/bungie', null)
      this.error = null
    },

    async submitRegistration (event) {
      if (this.tokens.discord && this.tokens.faceit && this.tokens.bungie) {
        const payload = {
          discord: this.tokens.discord,
          bungie: this.tokens.bungie,
          faceit: this.tokens.faceit,
          recaptcha: 'LOLitsboken'
        }

        try {
          const resp = await this.$nuxt.$axios.post('/registration', payload)
          console.log(resp)
        } catch (e) {
          console.log(e)

          if (e.response.status === 403) {
            this.error = 'Looks like you have already registered'
          } else if (e.response.status === 401) {
            this.loginReset()
            this.error = 'You credentials expired, please try again'
          } else {
            this.error = 'Looks like we are having trouble please try again later'
          }
        }
      } else {
        this.error = 'You must link all the above to continue'
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
