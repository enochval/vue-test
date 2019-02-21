<template>
  <v-container>
    <v-layout row wrap>
      <v-flex hidden-sm-and-down md2 mt-3 px-2>
          <logo />
      </v-flex>
      <v-flex xs12 md8>
          <search-bar />
      </v-flex>
      <v-flex xs12 md2 mt-2>
        <header-icons />
      </v-flex>
    </v-layout>
  
    <v-layout row mt-3>
      <v-flex hidden-sm-and-down md3>
        <categories :categories="categories"/>
      </v-flex>
      <v-flex xs12 md9>
        <carousel/>
      </v-flex>
    </v-layout>

    <v-layout row mt-5>
      <v-flex xs12>
        <popular-categories-card title="Explore Popular Categories" :products="popularCategories" />
      </v-flex>
    </v-layout>

    <v-layout row mt-5>
      <v-flex xs12>
        <popular-categories-card title="Explore New Stuffs" :products="newStuffs"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from '~/components/homePage/Logo'
import SearchBar from '~/components/homePage/SearchBar'
import HeaderIcons from '~/components/homePage/HeaderIcons'
import Categories from '~/components/homePage/Categories'
import Carousel from '~/components/homePage/Carousel'
import PopularCategoriesCard from '~/components/homePage/PopularCategoriesCard'

export default {
  components: {
    Logo,
    SearchBar,
    HeaderIcons,
    Categories,
    Carousel,
    PopularCategoriesCard
  },

  async asyncData({ $axios }) {
    const categories = await $axios.$get('/categories')
    const products = await $axios.$get('/products')
    const popularCategories = products.filter((product, index) => index < 8)
    const newStuffs = products.filter((product, index) => index > 7)
    return { 
      categories,
      popularCategories,
      newStuffs
    }
  }
}
</script>
