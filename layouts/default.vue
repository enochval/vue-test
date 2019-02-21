<template>
<v-app>
  <Nav />
  <v-content class="bg-color">
    <nuxt />
  </v-content>
  <Footer />
</v-app>
</template>

<script>
import Nav from '../components/homePage/Nav'
import Footer from '../components/homePage/Footer'

export default {
  data() {
    return {}
  },
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
.bg-color {
  background-color: #FFFFFF
}
</style>
