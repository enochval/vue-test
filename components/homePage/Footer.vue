<template>
<v-footer dark height="auto">
  <v-card flat width="100%" class="footer-bg">
    <v-container>
      <v-layout wrap row justify-center fill-height :text-xs-center="this.$vuetify.breakpoint.smAndDown" py-5>
        <v-flex pl-3 :xs12="this.$vuetify.breakpoint.xsOnly" :sm6="this.$vuetify.breakpoint.smOnly" :md4="this.$vuetify.breakpoint.mdAndUp">
          <v-layout class="links-wrapper" column>
            <div class="font-weight-bold subheading">PAYSMOSMO</div>
            <div class="font-weight-medium">Help give out inventory loans to <br> cooperative members with ease</div>
          </v-layout>
        </v-flex>

        <v-flex :xs12="this.$vuetify.breakpoint.xsOnly" :sm6="this.$vuetify.breakpoint.smOnly" :md2="this.$vuetify.breakpoint.mdAndUp">
          <v-layout class="links-wrapper" column>
            <div class="font-weight-bold subheading">Contact</div>
            <nuxt-link to="#" class="tertiary--text mb-2">Registration</nuxt-link>
            <nuxt-link to="#" class="tertiary--text mb-2">About Us</nuxt-link>
            <nuxt-link to="#" class="tertiary--text">Contact Us</nuxt-link>
          </v-layout>
        </v-flex>
        <v-flex :xs12="this.$vuetify.breakpoint.xsOnly" :sm6="this.$vuetify.breakpoint.smOnly" :md2="this.$vuetify.breakpoint.mdAndUp">
          <v-layout class="links-wrapper" column>
            <div class="font-weight-bold subheading">Help</div>
            <nuxt-link to="#" class="tertiary--text font-weight-medium mb-2">Privacy Policy</nuxt-link>
            <nuxt-link to="#" class="tertiary--text font-weight-medium mb-2">How it works</nuxt-link>
            <nuxt-link to="#" class="tertiary--text font-weight-medium">Terms & Conditions</nuxt-link>
          </v-layout>
        </v-flex>
        <v-flex :xs12="this.$vuetify.breakpoint.xsOnly" :sm6="this.$vuetify.breakpoint.smOnly" :md2="this.$vuetify.breakpoint.mdAndUp">
          <v-layout class="links-wrapper" column>
            <div class="font-weight-bold subheading">Stay Connected</div>
            <div class="d-inline-block">
              <v-btn outline small fab class="ml-0 button-height tertiary">
                <v-icon small fab color="tertiary">fab fa-facebook-f</v-icon>
              </v-btn>
              <v-btn outline small fab class="button-height tertiary">
                <v-icon small fab color="tertiary">fab fa-twitter</v-icon>
              </v-btn>
              <v-btn outline small fab class="button-height tertiary">
                <v-icon small fab color="tertiary">fab fa-instagram</v-icon>
              </v-btn>
            </div>
          </v-layout>
        </v-flex>
        <v-flex :xs12="this.$vuetify.breakpoint.xsOnly" :sm6="this.$vuetify.breakpoint.smOnly" :md2="this.$vuetify.breakpoint.mdAndUp">
          <v-layout class="links-wrapper" column>
            <div class="font-weight-bold body-2">Back to top 
              <span class="pl-3">
                  <v-icon small color="tertiary">expand_less</v-icon>
                </span>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-text class="my-footer-text-color my-bottom-bg-color text-xs-center py-4">
      &copy;2018 <span>PAYSMOSMO</span>
    </v-card-text>
  </v-card>
</v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    items: [{
        icon: true,
        title: 'Jason Oner',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        title: 'Travis Howard',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
      },
      {
        title: 'Ali Connors',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
      },
      {
        title: 'Cindy Baker',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
      }
    ]
  })
}
</script>

<style>
.footer-bg {
  background-color: #373A3C;
}

.my-bottom-bg-color {
  background-color: #2B2F31
}

.links-wrapper a {
  line-height: 2;
  text-decoration: none;
}

.links-wrapper div {
  margin-bottom: 25px;
}

.button-height.v-btn--floating.v-btn--small {
  height: 28px;
  width: 28px;
}
</style>
