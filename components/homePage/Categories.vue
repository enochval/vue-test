<template>
<v-layout row>
  <v-flex xs12 sm11>
    <v-card elevation="6">
      <v-toolbar color="primary" dark flat dense="">
        <div class="text-uppercase white--text font-weight-medium">Categories</div>
      </v-toolbar>

      <v-list>
        <template v-for="(item, index) in categories">
          <v-list-tile :key="item.name" @click="toggle(item.id)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon small>keyboard_arrow_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < categories.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  props: [
    'categories'
  ],
  
  methods: {
    toggle(index) {
      console.log(index)
    }
  }
}
</script>

<style>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 16px;
}

.v-list {
  padding: 0;
}
</style>
