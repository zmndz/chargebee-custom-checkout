<template>
  <v-app dark>
    <v-app-bar
      app
      flat
      color="background"
      class="pa-8"
    >
      <div class="d-flex align-end">
        <img src="~/assets/images/logo.webp" width="150" alt="">
        <span class="ml-4 grey--text text-20">Checkout</span>
      </div>
      <v-spacer />
      <div>
        <span class="grey--text">Already have an account? </span><span>Log in</span>
      </div>
    </v-app-bar>
    <v-main class="mt-16">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
