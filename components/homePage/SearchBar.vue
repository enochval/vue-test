<template>
    <v-layout row>
      <v-flex xs9>
          <v-text-field
            flat
            solo
            placeholder="Search for products"
            background-color="accent"
            prepend-inner-icon="search"
            color="#969899"
            class="searchInput"
          >
          </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn class="mt-0 searchButton" color="secondary" block depressed>Search</v-btn>
      </v-flex>
    </v-layout>
</template>

<style>
.searchInput > .v-input__control {
  min-height: 44px !important;
}

.searchInput .v-input__slot {
  border-radius: 0 !important;
}

.searchButton {
  height: 44px;
  border-radius: 0;
}
</style>
