<template>
  <div class="body">
    <div class="registration-title">
         Destiny Arena Registration
    </div>
    <div class="main-flex-container discord-background">
        <div class="single-container">
          <div class="single-button blurple-background">
            DISCORD
            <!--img src="~/assets/images/discord.svg"></img-->
          </div>
          <div class="single-text">
          </div>
        </div>
        <div class="single-button faceit-background">
          FACEIT
          <!--img src="~/assets/images/faceit.png"></img-->
        </div>
        <div class="single-button bungie-background">
          BUNGIE.NET
          <!--img src="~/assets/images/bungie.png"></img-->
        </div>
    </div>
    <div class="registration">
        <recaptcha
          @error="onError"
          @success="onSuccess"
          @expired="onExpired"
        />

        <div class="register-button">
          Register
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
