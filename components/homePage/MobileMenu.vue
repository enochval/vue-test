<template>
<v-navigation-drawer absolute app temporary v-model="drawer">
  <v-list>
    <v-list-tile @click="click('How is works')">
      <v-list-tile-action>
        <v-icon small color="primary">question_answer</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>How It Works</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="click('Log In')">
      <v-list-tile-action>
        <v-icon small color="primary">fas fa-sign-in-alt</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Log In</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="click('Sign Up')">
      <v-list-tile-action>
        <v-icon small color="primary">fas fa-user-plus</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Sign Up</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-group no-action prepend-icon="category" value="true">
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title>Categories</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-for="(item, i) in categories" :key="i" @click="click(item.name)">
        <v-list-tile-content>
          <v-list-tile-title v-text="item.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon small>keyboard_arrow_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list-group>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  props: [
    'drawer'
  ],
  data: () => ({
    categories: null
  }),
  async created() {
    const { data } = await this.$axios.get('/categories')
    this.categories = data
  },
  methods: {
    click(message) {
      alert(`You clicked ${message}`)
    }
  }
}
</script>
