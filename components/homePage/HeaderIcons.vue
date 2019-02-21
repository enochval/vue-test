<template>
<v-layout row justify-end>
  <v-flex xs4>
    <v-layout align-center justify-center column>
      <v-badge color="red" right overlap class="my-badge">
        <v-icon slot="badge"></v-icon>
        <v-icon color="black">shopping_cart</v-icon>
      </v-badge>
      <div class="remove-line-height text-lowercase">Cart</div>
    </v-layout>
  </v-flex>
  <v-flex xs4>
    <v-layout align-center justify-center column>
      <v-badge color="red" right overlap class="my-badge">
        <v-icon slot="badge"></v-icon>
        <v-icon color="black">favorite</v-icon>
      </v-badge>
      <div class="remove-line-height text-lowercase">Wishlist</div>
    </v-layout>
  </v-flex>
  <v-flex xs4>
    <v-layout align-center justify-center column>
      <v-badge color="red" right overlap class="my-badge">
        <v-icon slot="badge"></v-icon>
        <v-icon color="black">notifications_none</v-icon>
      </v-badge>
      <div class="remove-line-height">Notification</div>
    </v-layout>
  </v-flex>
</v-layout>
</template>

<script>
export default {

}
</script>

<style>
  .my-badge.v-badge--overlap .v-badge__badge{
    right: 3px;
    top: 0;
  }

  .v-badge__badge {
    height: 8px !important;
    width: 8px !important;
  }

  .remove-line-height {
    line-height: 0.5;
    font-size: 7px;
  }
</style>
