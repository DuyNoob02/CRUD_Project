<template>
    <AppHeader />
    <div>
        <div class="login">
            <form id="login-form" @submit.prevent="handleSubmit">
                <h2 >Đăng nhập</h2>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" v-model="username" />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" v-model="password" />
                </div>
                <button class="login-btn">Đăng nhập</button>
                <p>Bạn chưa có tài khoản? 
                    <router-link class="register" :to="{name: 'register'}">Đăng ký</router-link>
                </p>
                <div v-if="errorMessage">{{ errorMessage }}</div>
            </form>
        </div>
    </div>
    <AppFooter />
</template>


<script>
import axios from 'axios';
import userAPI from '@/service/userAPI';
 
// import { useUserStore } from '../stores/userStore'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
import router from 'vue-router'

export default {
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
   
    methods: {
        async handleSubmit() {
            try {
                const data = {
                    username: this.username,
                    password: this.password
                }
                console.log(data);
                const result = await axios.post('http://localhost:5000/user/login', data, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                .then(response => {
                    console.log(response);
                    if (response.statusText === "OK") {
                        const data = {
                            islogged: true,
                            user: response.data.user
                        }
                        localStorage.setItem('user', JSON.stringify(data))
                        alert("Đăng nhập thành công")
                        this.$router.push('/')
                    }else{
                        alert("Thất Bại")
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>
<style scoped>
.login {
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
}

#login-form{
    height: 300px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
}

h2{
    text-transform: uppercase;
    text-align: center;
    background-color: rgb(74, 74, 248);
    padding: 10px;
    margin: -20px;
    margin-bottom: 10px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}


form div {
    display: flex;
    flex-direction: column;
    gap:  10px;
    margin-top: 10px;
}

input{
    border: 1px solid #333;
    height: 30px;
    margin-top: -10px;
}

.login-btn{
    margin-top: 15px;
    background-color: aquamarine;
    padding: 5px;
    text-align: centers;
}
.login-btn:hover{
    background-color: rgb(15, 236, 162);
}

.register:hover{
    color: rgb(70, 68, 200);
}
/*
form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #000;
    height: 300px;
    padding: 0 20px;
}

form h2{
    text-align: center;
    margin: 20px 0;
    text-transform: uppercase;
}




form div input {
    padding: 2px 5px;
    border: 1px solid #000;
}

form  button{
    background:  #06bb30 ;
    width: 100%;
    margin-top: 15px;
    padding: 13px;
} */

</style>

