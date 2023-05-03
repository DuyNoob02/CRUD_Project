<template>
  <AppHeader />
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <div>
          <router-link :to="{ name: 'post', params: { id: post._id } }">
            <v-card class="pa-1 card_component" max-width="344" min-height="450" max-height="450" v-bind="props">
              <!-- <v-img height="250" :src="`http://localhost:5000/uploads/${post.image}`"></v-img> -->
              <v-img height="250" :src="`http://localhost:5000/uploads/${post.image}`"></v-img>
              <v-btn class="ml-4 mt-3 btn" small outlined color="#9afee2" font="Courier New">
                {{ post.category }}
              </v-btn>
              <v-card-title class="headline">
                {{ post.title }}
              </v-card-title>
              <v-card-text class="py-0">
                <p>{{ post.content.substring(0, 80) + "..." }}</p>
              </v-card-text>

              <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                <v-btn variant="flat">xem chi tiết</v-btn>
              </v-overlay>
            </v-card>
          </router-link>
        </div>

      </v-col>
    </v-row>
  </v-container>
  <AppFooter />
</template>

<script>
import API from '../service/api';
import { RouterLink } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';
export default ({
  components: { AppHeader, AppFooter },
  data() {
    return {
      posts: [],
      overlay: false,
    };
  },
  async mounted() {
    // this.posts = await API.getAllPost();
    const result = await axios.get("http://localhost:5000/api/post/") 
    this.posts = result.data;
  },

});
</script>


<style>
@import url(../assets/main.css);


.card_component {
  transition: transform linear 0.1s;
}

.card_component:hover {
  /* transform: translateY(-3px); */
  transform: translate(6px)
}

.v-img__img--contain {
  -o-object-fit: contain;
  object-fit: contain;
  margin-left: 29px;
}

.v-row.v-row--no-gutters {
  margin-left: 18px;
}

.v-btn__content {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 1000;
}

.v-card-text {
  font-weight: 200;
}
</style>
