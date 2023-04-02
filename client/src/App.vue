<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
          <v-img src="../public/logo.png" width="100px" ></v-img>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            link
            :value="item"
            active-color="#34331c"
            >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <AppFooter/>
    
  </v-app>
  
</template>

<script>
import AppFooter from "../src/components/AppFooter.vue"
  export default {
    components:{
      AppFooter,
    },

    data: () => ({ 
      drawer: null,
      items: [
        { title: 'Trang Chủ', icon: 'mdi-home', link:"/"},
        { title: 'Home', icon: 'mdi-home', link:"/item" },
        { title: 'Add Post', icon: 'mdi-note-plus', link:"/add-post" },
        { title: 'About', icon: 'mdi-help-box', link:"/about" },
      ],
    }),
  }
</script>

<style>
@import url(./assets/main.css);


.v-container{
  background-color: #1565C0;
  max-width: 1280px;
}
.v-list-item__overlay{
  display: none;
}
.v-list-item-title{
  font-weight: 1000;
}

</style>