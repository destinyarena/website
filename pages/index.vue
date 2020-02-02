<template>
  <div class="body">
  </div>
</template>

<script>
export default {
  mounted () {
    this.redirect()
  },
  methods: {
    redirect () {
      this.$nuxt.context.redirect(200, '/registration')
    }
  }
}
</script>
