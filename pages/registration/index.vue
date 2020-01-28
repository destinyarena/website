<template>
  <div class="body">
    <div class="registration-title">
      <img src="~/assets/images/logo.jpg"></img>
      <span>REGISTRATION</span>
    </div>
    <div class="main-flex-container">
        <div class="single-button">
          DISCORD
          <!--img src="~/assets/images/discord.svg"></img-->
        </div>
        <div class="single-button">
          FACEIT
          <!--img src="~/assets/images/faceit.png"></img-->
        </div>
        <div class="single-button">
          BUNGIE
          <!--img src="~/assets/images/bungie.png"></img-->
        </div>
    </div>
    <div class="registration">
        <recaptcha
          @error="onError"
          @success="onSuccess"
          @expired="onExpired"
        />
        <div class="buttons row">
          <div class="reset-button">
            Reset
          </div>
          <div class="register-button">
            Register
          </div>
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
