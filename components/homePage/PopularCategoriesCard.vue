<template>
<v-layout justify-center>
  <v-flex xs12>
    <v-toolbar  color="transparent">
      <v-toolbar-title class="font-weight-medium caption">{{title.toUpperCase()}}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-container>
        <v-layout wrap row>
          <v-flex xs12 sm6 md3 v-for="(product, index) in products" :key="index">
            <v-layout row justify-center align-center>
              <v-card flat width="205">
                <v-img 
                  :src="`https://source.unsplash.com/collection/${product.id}/225x200`" 
                  :lazy-src="`https://source.unsplash.com/collection/${product.id}/225x200`" 
                  height="225px" 
                  width="200px">
                </v-img>
                <div class="py-1">{{product.name}}</div>
                <v-rating pb-1 :value="product.rating" half-increments readonly dense background-color="secondary" color="secondary" small></v-rating>
                <span  :class="{'my-line-through': product.old_price}">&#8358;{{new Intl.NumberFormat().format(product.old_price)}}</span>
                <span v-if="product.old_price" class="my-float-right">&#8358;{{new Intl.NumberFormat().format(product.price)}}</span>
              </v-card>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  props: {
    title: '',
    products: null
  }
}
</script>

<style>
.my-float-right {
  float: right;
}

.my-line-through {
  text-decoration: line-through;
  color: #B9BBBC;
}
</style>
