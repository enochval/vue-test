<template>
<div>
  <v-toolbar height="57" color="white">

    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />

    <v-spacer></v-spacer>

    <v-container>
      <v-layout row wrap justify-end mr-5 align-center="">
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat class="text-capitalize">How it works</v-btn>
          <v-btn flat class="text-capitalize">Log In</v-btn>
          <v-divider class="reduce-max-height" inset vertical />
          <v-btn flat class="text-capitalize primary--text">Sign Up</v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-container>

    <v-toolbar-items class="hidden-md-and-up">
      <v-btn small flat class="text-capitalize">Paysmosmo</v-btn>
    </v-toolbar-items>

  </v-toolbar>
  <mobile-menu :drawer="drawer"/>
</div>
</template>

<script>
import MobileMenu from '~/components/homePage/MobileMenu'

export default {
  data() {
    return {
      drawer: null
    }
  },
  components: {
    MobileMenu
  }
}
</script>

<style>
.reduce-max-height {
  margin-top: 0 !important;
  max-height: calc(100% - 32px) !important;
}
</style>
