<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4" mx-auto>
                <v-card class="pa-2" id="card">
                    <v-img id="img_post" :src="`http://localhost:5000/uploads/${post.image}`"></v-img>
                    <div class="card_action">
                      <div class="action_detail">
                        <div class="category_info">
                          <button class="category_btn">{{ post.category }}</button>
                        </div>
                        <div class="modify">
                          <router-link class="edit_action" :to="{name: 'editPost', params: {_id : post._id}}">Edit</router-link>
                          <button class="delete_action" @click="removePost(post._id)">Delete</button>
                        </div>
                      </div>
                    </div>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
 
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                        
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api';
import EditPost from './EditPost.vue';
import { RouterLink } from 'vue-router';
export default {
    data(){
        return{
            post: {},
        };
    },

     mounted(){
       const response =  API.getPostByID(this.$route.params.id);
        response.then((data)=>{
          this.post = data;
        })
    },
    methods: {
      async removePost(id){
        const response = await API.deletePost(id)
        this.$router.push({name: 'Home', params: {message: response.message}})
      }
    }
}
</script>

<style>

.action_detail{
  display: flex;
  justify-content: space-around;
}

.modify{
  display: flex;
  justify-content: space-around;
}
.edit_action{
  margin: 0 12px;
  background-color: #52e557;
  border-radius: 4px;
  padding: 3px 4px;
  width: 50px;
}
.edit_action:hover{
  background-color: #9ffaa2;
}
.delete_action{
  margin: 0 12px;
  background-color: #fa7d7d;
  border-radius: 4px;
  padding: 3px 4px;
}
.delete_action:hover{
  background-color: #f49e9e;
}


#card{
  margin-left: 6%;
  width: 1000px;
}

#img_post{
  margin: 0 170px;
  width: 700px;
}

.category_btn{
  background-color:#9afee2;
  border-radius: 4px;
  padding: 3px 4px;
}

.category_btn:hover{
  background-color: #b3fee9;
}

.headline{
  background-color: #b3fee9;
  font-size: 28px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
</style>
