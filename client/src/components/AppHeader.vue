
<template>
  <v-app id="inspire" app>
    <div id="header">
      <router-link to="/">
        <div class="logo">
          <v-img id="logo-image" src="../assets/img/logo.png" alt=""></v-img>
        </div>
      </router-link>

      <div class="right-side">
        <ul id="nav" class="list">
          <li @click="handleAddPost" style="color:white" class="addpost-area">ADD POST</li>
          <li>ABOUT</li>
        </ul>

        <ul>
          <li class="userInfo">
            <p v-if="data">{{ data }} </p>

            <span class="logout-icon" @click="handleLogout" v-if="islogged === true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </span>


          </li>
        </ul>
      </div>
    </div>
  </v-app>
</template>


<script>

import { useUserStore } from "../stores/userStore"
import router from "vue-router"
export default {
  data() {
    return {
      data: null,
      islogged: false
    }
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem("user"))
    console.log(data);
    this.data = data.user.username
    this.islogged = data.islogged

  }
  ,
  methods: {
    async handleLogout() {
      alert("Bạn muốn đăng xuất")
      localStorage.setItem('user', JSON.stringify({
        islogged: false,
        user: ""

      }))
      await this.$router.push('/login')
    },
    async handleAddPost(){
      console.log(this.islogged);
      if(this.islogged === false){
        await this.$router.push('/login')
      }
      else this.$router.push('/add-post')
    }
  }
}
</script>
<style>
.v-application__wrap {
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


#logo-image {
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

ul li {
  margin: 0 20px;
}

.list {
  font-size: 18px;
}

.v-row {
  margin-top: 30px;
}

.addpost-area::after {
  display: inline-block;
  content: "";
  /* background-color: black; */
  width: 1px;
  height: 12px;
  margin-left: 20px;
  color: white;
  z-index: 1;
}

.userInfo {
  list-style: none;
  /* display:  inline-block; */
  display: flex;
  gap: 10px;
}

.logout-icon .icon {
  font-size: 10px;
  width: 20px;
  height: 20px;
}</style>