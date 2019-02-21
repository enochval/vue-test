<template>
  <v-carousel height="440" hide-controls interval="8000" class="remove-control-background my-custom-carousel">
    <v-carousel-item
      v-for="(item,i) in items"
      lazy
      :key="i"
      :src="`https://source.unsplash.com/collection/${i}/office-life`"
    >
    <v-layout column align-start justify-center ml-5 fill-height>
      <div class="white--text my-title-font-style text-uppercase">New Collection</div>
      <p class="white--text my-sub-title pl-1">
        It is long established fact that a render will be distracted by the readable<br>
        content of the page when looking at its layout.
      </p>
      <v-btn outline small color="secondary" class="my-button-style">Shop Now</v-btn>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
.remove-control-background > .v-carousel__controls {
  background: transparent;
}

.my-title-font-style {
  font-size: 3.5em;
  font-weight: 500;
}

.my-sub-title {
  font-size: 1.1em;
  font-weight: 500;
}

.my-button-style.v-btn.v-btn--outline {
  border: 2px solid currentColor;
  font-weight: 600;
}

.my-custom-carousel .v-btn--icon.v-btn--small {
  width: 5px;
}
</style>
