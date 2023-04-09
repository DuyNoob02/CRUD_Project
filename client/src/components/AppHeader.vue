<script>
import { RouterLink } from "vue-router";
export default {
}
</script>


<template>
    <v-app id="inspire" app>
      <!-- <v-app-bar app extended>
  
        
              </v-app-bar> -->
  
      <div id="header">
        <router-link to="/">
          <div class="logo">
            <v-img id="logo-image" src="../assets/img/logo.png" alt=""></v-img>
          </div>
          <!-- <p class="logo-title">Universe</p> -->
        </router-link>
  
        <div class="right-side">
          <ul id="nav" class="list">
            <router-link style="color:white" class="addpost-area" to="/add-post">ADD POST</router-link>
            <li>ABOUT</li>
          </ul>
        </div>
  
      </div>
  
  
      <!-- <v-main>
                <v-container>
                  <v-row>
                    <v-col
                      v-for="n in 24"
                      :key="n"
                      cols="4"
                    >
                      <v-card height="200"></v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-main> -->
    </v-app>
</template>



<style>

.v-application__wrap{
    padding-bottom: 0;
    min-height: 120px;
}

#header {
  height: 100px;
  background-color: rgb(12, 14, 13);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
}

div {
  display: block;
}

a {
  text-decoration: none;
  width: 110px;
  /* overflow: hidden; */
  /* display: flex;
  justify-content: center; */
}


.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}


#logo-image{
  overflow: unset !important;
  /* margin-top: 15px; */
transform: scale(0.8);
}

.v-img__img {
  width: 83%;
}


.right-side {
  position: relative;
  display: flex;
  justify-content: space-around;
  color: white;
}

#nav {
  list-style: none;
  display: flex;

}

ul li{
  margin: 0 20px;
}
.list{
  font-size: 18px;
}

.v-row {
  margin-top: 30px;
}

.addpost-area::after{
  display: inline-block;
  content: "";
  /* background-color: black; */
  width: 1px;
  height: 12px;
  margin-left: 20px;
  color: white;
  z-index: 1;
}
</style>