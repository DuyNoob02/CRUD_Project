<template>
  <v-app id="inspire">
    <!-- <AppHeader  /> -->
    <div >
      <router-view></router-view>
    </div>
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
import AppHeader from "../src/components/AppHeader.vue"
import AppFooter from "../src/components/AppFooter.vue"
export default {
}
</script>

<style>
@import url(./assets/main.css);

.v-main {
  margin-bottom: 10px;
}

.v-container {
  background-color: #1565C0;
  max-width: 1280px;
}

.v-list-item__overlay {
  display: none;
}

.v-list-item-title {
  font-weight: 1000;
}
</style>
